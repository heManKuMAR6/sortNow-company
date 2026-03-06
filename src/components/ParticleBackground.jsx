import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = 0;
        let height = 0;
        let particles = [];

        // Mouse positions mapped to canvas space
        const mouse = {
            x: -9999,
            y: -9999,
            radius: 180 // The interaction distance
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            // Need to get coordinates strictly within the container bounds
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 1; // Size of the dot
                this.baseX = this.x;
                this.baseY = this.y;
                // Slower more subtle movement
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
            }

            update() {
                // Keep moving slowly
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges gracefully
                if (this.x < 0) {
                    this.x = 0;
                    this.speedX = -this.speedX;
                }
                if (this.x > width) {
                    this.x = width;
                    this.speedX = -this.speedX;
                }
                if (this.y < 0) {
                    this.y = 0;
                    this.speedY = -this.speedY;
                }
                if (this.y > height) {
                    this.y = height;
                    this.speedY = -this.speedY;
                }

                // Check distance to mouse
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                // If close to cursor, slightly gravitate/shift
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    // Move particle *slightly* towards or away based on tech feel, let's do soft repel
                    this.x -= (dx / distance) * force * 1.5;
                    this.y -= (dy / distance) * force * 1.5;
                }
            }

            draw() {
                ctx.fillStyle = 'rgba(31, 111, 139, 0.4)'; // our deep teal brand color
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            // Calculate a fair number of particles based on screen real estate
            const numParticles = Math.floor((width * height) / 12000); // adjust divisor for density
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        };

        const resize = () => {
            // Container size
            const parent = canvas.parentElement;
            width = parent.clientWidth || window.innerWidth;
            height = parent.clientHeight || window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            init(); // Re-init particles on resize to ensure full coverage
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update & Draw all particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }

            // Draw line connections representing a "network"
            for (let i = 0; i < particles.length; i++) {
                // Connect particles to each other
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 110) { // Max connection length between dots
                        ctx.beginPath();
                        // Opacity fades as they get further apart
                        const opacity = 1 - (distance / 110);
                        ctx.strokeStyle = `rgba(31, 111, 139, ${opacity * 0.25})`; // very subtle teal lines
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // IMPORTANT: Connect particle directly to the mouse if nearby
                // This makes the network "follow" the cursor everywhere it goes
                const mDx = particles[i].x - mouse.x;
                const mDy = particles[i].y - mouse.y;
                const mDistance = Math.sqrt(mDx * mDx + mDy * mDy);

                if (mDistance < mouse.radius) {
                    ctx.beginPath();
                    const opacity = 1 - (mDistance / mouse.radius);
                    ctx.strokeStyle = `rgba(31, 111, 139, ${opacity * 0.3})`;
                    ctx.lineWidth = 1.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Delay starting slightly so DOM has bounds calculated
        setTimeout(() => {
            resize();
            animate();
        }, 100);

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ParticleBackground;
