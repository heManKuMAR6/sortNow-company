import { motion } from 'framer-motion';

/**
 * Revamped "How We Work" section (Process.jsx)
 * Focuses on the ML/Software Lifecycle: Data -> Prep -> Train -> Eval -> Deploy -> Monitor
 * Features a compact, high-fidelity animated timeline.
 */

const stages = [
    {
        title: "Data",
        desc: "Consolidating raw noise into structured truth.",
        color: "var(--color-deep-teal)",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.rect x="10" y="10" width="10" height="10" rx="2" fill="currentColor" initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} />
                <motion.rect x="25" y="10" width="10" height="10" rx="2" fill="currentColor" initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} />
                <motion.rect x="40" y="10" width="10" height="10" rx="2" fill="currentColor" initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} />
                <motion.rect x="10" y="25" width="10" height="10" rx="2" fill="currentColor" initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }} />
                <motion.rect x="25" y="25" width="10" height="10" rx="2" fill="currentColor" initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
                <motion.rect x="40" y="25" width="10" height="10" rx="2" fill="currentColor" initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
            </svg>
        )
    },
    {
        title: "Preprocessing",
        desc: "Cleaning, transforming, and feature engineering.",
        color: "var(--color-soft-mint)",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.path d="M10 30 H 50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -8] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <motion.rect x="20" y="20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" animate={{ rotate: 90 }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            </svg>
        )
    },
    {
        title: "Training",
        desc: "Building intelligence with iterative precision.",
        color: "var(--color-sunny-yellow)",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 20" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                <motion.circle cx="30" cy="30" r="5" fill="currentColor" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            </svg>
        )
    },
    {
        title: "Evaluation",
        desc: "Rigorous testing against real-world chaos.",
        color: "var(--color-warm-coral)",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.path d="M10 40 L 25 25 L 40 35 L 55 15" fill="none" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
                <motion.circle cx="55" cy="15" r="3" fill="currentColor" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} />
            </svg>
        )
    },
    {
        title: "Deployment",
        desc: "Moving from laboratory to live production.",
        color: "#8E44AD", // Violet/Magenta tone
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.path d="M30 50 V 10" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
                <motion.path d="M20 20 L 30 10 L 40 20" fill="none" stroke="currentColor" strokeWidth="2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} />
                <motion.path d="M10 50 H 50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            </svg>
        )
    },
    {
        title: "Monitoring",
        desc: "Continuous observation and self-healing.",
        color: "var(--color-deep-teal)",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <motion.path d="M30 10 A 20 20 0 0 1 50 30" fill="none" stroke="currentColor" strokeWidth="2" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                <motion.circle cx="30" cy="30" r="2" fill="currentColor" />
            </svg>
        )
    }
];

const Process = () => {
    return (
        <section id="problem" style={{ padding: 'var(--spacing-5xl) 0', background: 'var(--color-off-white)' }}>
            <div className="container">
                <div className="text-center mb-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge" style={{ background: 'rgba(31, 111, 139, 0.08)', color: 'var(--color-deep-teal)', borderColor: 'rgba(31, 111, 139, 0.15)' }}>
                            Our Lifecycle
                        </span>
                        <h2 style={{ fontWeight: 300, marginTop: '1.5rem' }}>How systems actually come to life<span className="highlight-dot">.</span></h2>
                        <p style={{ maxWidth: 700, margin: '1rem auto 0 auto', color: 'var(--text-secondary)', fontWeight: 300, fontSize: '1.2rem' }}>
                            We bridge the gap between "science project" and "production system" using a disciplined, lifecycle-oriented approach.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-3" style={{ gap: 'var(--spacing-xl)' }}>
                    {stages.map((stage, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            style={{
                                padding: 'var(--spacing-xl)',
                                borderTop: `4px solid ${stage.color}`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                minHeight: '260px'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                        >
                            <div style={{ color: stage.color, marginBottom: 'var(--spacing-lg)' }}>
                                {stage.icon}
                            </div>
                            <h4 style={{ fontWeight: 500, marginBottom: 'var(--spacing-sm)' }}>{stage.title}</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
                                {stage.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Conceptual "Flow" Indicator */}
                <motion.div
                    className="mt-3xl text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '1rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        <span>Chaos</span>
                        <div style={{ width: '100px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-light-gray), transparent)' }} />
                        <span>Clarity</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
