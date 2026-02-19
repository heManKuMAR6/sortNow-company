import { useRef, useEffect, useCallback } from 'react';

/**
 * HeroAnimation v5 — Convergence ZONE at "work."
 * 
 * Lines converge into a soft zone (not a pinpoint) around the "work." text,
 * then fan out as perfectly calm streamlined rays.
 * No separate dot drawn — the CSS .highlight-dot IS the visual anchor.
 */

function lerp(a, b, t) { return a + (b - a) * t; }

function seededRandom(seed) {
    let s = seed;
    return () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

// ── Line colors ───────────────────────────────────────────────────────
function getLineColor(lineIndex, totalLines) {
    const band = lineIndex / (totalLines - 1);
    let r, g, b;
    if (band < 0.25) {
        const t = band / 0.25;
        r = lerp(30, 60, t); g = lerp(180, 200, t); b = lerp(210, 185, t);
    } else if (band < 0.5) {
        const t = (band - 0.25) / 0.25;
        r = lerp(60, 160, t); g = lerp(200, 210, t); b = lerp(185, 100, t);
    } else if (band < 0.75) {
        const t = (band - 0.5) / 0.25;
        r = lerp(160, 220, t); g = lerp(210, 140, t); b = lerp(100, 130, t);
    } else {
        const t = (band - 0.75) / 0.25;
        r = lerp(220, 175, t); g = lerp(140, 100, t); b = lerp(130, 190, t);
    }
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}

const HeroAnimation = ({ opacity = 0.65 }) => {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const sizeRef = useRef({ w: 0, h: 0 });
    const linesRef = useRef(null);

    // Convergence ZONE center (positioned right behind the word "work.")
    const ZONE_X_PCT = 0.50;   // centered horizontally (text is centered)
    const ZONE_Y_PCT = 0.55;   // at the "work." text line
    const ZONE_WIDTH = 140;    // px — wide enough to span the word "work."
    const ZONE_HEIGHT = 36;    // px — how close lines get vertically in the zone

    const buildLines = useCallback((w, h) => {
        const LINE_COUNT = 16;
        const rng = seededRandom(55);
        const lines = [];

        const zoneX = w * ZONE_X_PCT;
        const zoneY = h * ZONE_Y_PCT;

        for (let i = 0; i < LINE_COUNT; i++) {
            const norm = i / (LINE_COUNT - 1); // 0..1

            // LEFT edge: scattered vertically across the hero
            const startY = h * (0.1 + norm * 0.8) + (rng() - 0.5) * h * 0.05;

            // ZONE: lines compress into a tight band around zoneY
            // Each line gets a slightly different Y within the zone band
            const zoneSlotY = zoneY + (norm - 0.5) * ZONE_HEIGHT;

            // RIGHT edge: evenly spread, streamlined
            const rightSpread = 0.72;
            const endY = h * (0.5 - rightSpread / 2) + norm * h * rightSpread;

            lines.push({
                index: i,
                total: LINE_COUNT,
                startY,
                zoneSlotY,
                endY,
                zoneX,
                // Wave parameters (left side chaos)
                phase1: rng() * Math.PI * 2,
                phase2: rng() * Math.PI * 2,
                freqMult: 0.8 + rng() * 0.5,
                ampMult: 0.6 + rng() * 0.8,
                speed: 0.5 + rng() * 1.0,
                lineWidth: 1.0 + rng() * 0.7,
            });
        }

        linesRef.current = lines;
    }, []);

    const draw = useCallback((ctx, time) => {
        const { w, h } = sizeRef.current;
        const lines = linesRef.current;
        if (!lines || w === 0) return;

        ctx.clearRect(0, 0, w, h);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const zoneX = w * ZONE_X_PCT;
        const halfZoneW = ZONE_WIDTH / 2;
        const zoneLeft = zoneX - halfZoneW;   // where convergence begins
        const zoneRight = zoneX + halfZoneW;  // where lines start fanning out

        for (const line of lines) {
            const color = getLineColor(line.index, line.total);
            const t = time * 0.0003 * line.speed;

            ctx.beginPath();

            // === LEFT SEGMENT: chaotic waves → converge toward zone ===
            const LEFT_STEPS = 100;
            for (let step = 0; step <= LEFT_STEPS; step++) {
                const progress = step / LEFT_STEPS;
                const x = lerp(0, zoneLeft, progress);

                // Base Y curves from startY toward zoneSlotY
                const baseY = lerp(line.startY, line.zoneSlotY, progress);

                // Wave amplitude: moderate at left, fades to zero near zone
                const chaosDecay = Math.pow(1 - progress, 2.2);
                const maxAmp = h * 0.055 * line.ampMult;
                const amp = chaosDecay * maxAmp;

                const freq = 3.5 * line.freqMult;
                const wave1 = Math.sin(freq * progress * Math.PI * 2 + line.phase1 + t * 1.8);
                const wave2 = Math.sin(freq * 2.1 * progress * Math.PI * 2 + line.phase2 + t * 1.1) * 0.4;

                const y = baseY + amp * (wave1 + wave2);

                if (step === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            // === THROUGH THE ZONE: tight parallel pass (smooth, narrow) ===
            const ZONE_STEPS = 12;
            for (let step = 1; step <= ZONE_STEPS; step++) {
                const progress = step / ZONE_STEPS;
                const x = lerp(zoneLeft, zoneRight, progress);
                const y = line.zoneSlotY; // stay at tight zone position
                ctx.lineTo(x, y);
            }

            // === RIGHT SEGMENT: perfectly straight fan-out ===
            const RIGHT_STEPS = 60;
            for (let step = 1; step <= RIGHT_STEPS; step++) {
                const progress = step / RIGHT_STEPS;
                const x = lerp(zoneRight, w, progress);
                const y = lerp(line.zoneSlotY, line.endY, progress);
                ctx.lineTo(x, y);
            }

            // Gradient stroke
            const gradient = ctx.createLinearGradient(0, 0, w, 0);
            gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.15)`);
            gradient.addColorStop(0.12, `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`);
            gradient.addColorStop(ZONE_X_PCT - 0.08, `rgba(${color.r}, ${color.g}, ${color.b}, 0.55)`);
            gradient.addColorStop(ZONE_X_PCT, `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`);
            gradient.addColorStop(ZONE_X_PCT + 0.1, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
            gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0.25)`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = line.lineWidth;
            ctx.stroke();
        }

        // ── Right-side endpoint dots ────────────────────────────────────
        for (const line of lines) {
            const color = getLineColor(line.index, line.total);
            const endX = w * 0.97;
            const endY = lerp(line.zoneSlotY, line.endY, (endX - zoneRight) / (w - zoneRight));

            const pulse = 0.5 + 0.5 * Math.sin(time * 0.0012 + line.phase1);
            const dotSize = 1.8 * pulse;

            // Glow
            const gGrad = ctx.createRadialGradient(endX, endY, 0, endX, endY, dotSize * 3.5);
            gGrad.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${0.2 * pulse})`);
            gGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.beginPath();
            ctx.arc(endX, endY, dotSize * 3.5, 0, Math.PI * 2);
            ctx.fillStyle = gGrad;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(endX, endY, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.5 + 0.3 * pulse})`;
            ctx.fill();
        }

        // ── Emit particles traveling from zone → right ──────────────────
        const PULSE_COUNT = 6;
        for (let p = 0; p < PULSE_COUNT; p++) {
            const pRng = seededRandom(p * 97 + 13);
            const lineIdx = Math.floor(pRng() * lines.length);
            const line = lines[lineIdx];
            const color = getLineColor(line.index, line.total);

            const pSpeed = 0.00008 + pRng() * 0.00006;
            const pPhase = pRng();
            const pProgress = ((time * pSpeed + pPhase) % 1);

            const px = lerp(zoneRight, w * 0.95, pProgress);
            const py = lerp(line.zoneSlotY, line.endY, pProgress);

            const pAlpha = Math.sin(pProgress * Math.PI) * 0.5;
            const pSize = 1.5 + pRng() * 1.0;

            ctx.beginPath();
            ctx.arc(px, py, pSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${pAlpha})`;
            ctx.fill();
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            sizeRef.current = { w: rect.width, h: rect.height };
            buildLines(rect.width, rect.height);
        };

        resize();

        const animate = (time) => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            draw(ctx, time);
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        window.addEventListener('resize', resize);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [buildLines, draw]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity,
                pointerEvents: 'none',
                zIndex: 0,
            }}
            aria-hidden="true"
        />
    );
};

export default HeroAnimation;
