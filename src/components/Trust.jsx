import { motion } from 'framer-motion';

const Trust = () => {
    const cards = [
        {
            title: "We fix what’s messy, before it breaks",
            desc: "Proactive engineering that identifies bottlenecks and technical debt before they impact your velocity.",
            animation: (
                <div className="trust-anim-container">
                    <svg width="120" height="60" viewBox="0 0 120 60">
                        {/* Chaotic background lines that fade out */}
                        <motion.path
                            d="M0 30 Q 15 10 30 30 T 60 30 T 90 30 T 120 30"
                            fill="none"
                            stroke="var(--color-warm-coral)"
                            strokeWidth="1"
                            opacity="0.2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        {/* The "Snap to Grid" line */}
                        <motion.path
                            d="M10 45 L 30 15 L 50 45 L 70 15 L 110 30"
                            fill="none"
                            stroke="var(--color-warm-coral)"
                            strokeWidth="2"
                            initial={{ pathLength: 1, d: "M10 45 L 30 15 L 50 45 L 70 15 L 110 30" }}
                            whileInView={{ d: "M10 30 L 30 30 L 50 30 L 70 30 L 110 30" }}
                            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        />
                        {/* The stability pulse */}
                        <motion.circle
                            cx="110" cy="30" r="4"
                            fill="var(--color-warm-coral)"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: [0, 1.5, 1] }}
                            transition={{ delay: 1.8, duration: 0.5 }}
                        />
                    </svg>
                </div>
            )
        },
        {
            title: "From concept to running systems, we stay",
            desc: "We don't just deliver advice—we embed with your team to ship production-ready code.",
            animation: (
                <div className="trust-anim-container">
                    <svg width="120" height="60" viewBox="0 0 120 60">
                        {/* Client path */}
                        <motion.path
                            d="M10 10 L 40 10 L 110 10"
                            fill="none"
                            stroke="var(--color-light-gray)"
                            strokeWidth="2"
                        />
                        {/* SortNow path converging */}
                        <motion.path
                            d="M10 50 L 40 50 L 60 10"
                            fill="none"
                            stroke="var(--color-deep-teal)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                        {/* Unified pulse traveling forward */}
                        <motion.circle
                            r="4"
                            fill="var(--color-soft-mint)"
                            initial={{ cx: 60, cy: 10, opacity: 0 }}
                            whileInView={{ cx: [60, 110], opacity: [0, 1, 0] }}
                            transition={{ delay: 1.4, duration: 1.5, repeat: Infinity }}
                        />
                    </svg>
                </div>
            )
        },
        {
            title: "Tech you can trust. People you can talk to",
            desc: "Transparent partnership with senior engineers who communicate in plain English, not jargon.",
            animation: (
                <div className="trust-anim-container">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        {/* Outer rotating/pulsing ring */}
                        <motion.circle
                            cx="30" cy="30" r="25"
                            fill="none"
                            stroke="var(--color-deep-teal)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Solid core (The Truth/Trust) */}
                        <motion.circle
                            cx="30" cy="30" r="12"
                            fill="var(--color-deep-teal)"
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
            )
        }
    ];

    return (
        <section id="trust" className="trust-section" style={{ padding: 'var(--spacing-5xl) 0' }}>
            <div className="container">
                <div className="text-center mb-2xl">
                    <motion.h2
                        className="mb-md"
                        style={{ fontWeight: 300 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        No buzzwords. No false promises. Just real work<span className="highlight-dot">.</span>
                    </motion.h2>
                    <motion.p
                        className="mb-lg"
                        style={{ maxWidth: 800, margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.25rem', fontWeight: 300 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We don’t sell promises. We build systems that work and partnerships that last.
                    </motion.p>
                </div>

                <div className="grid grid-3" style={{ gap: 'var(--spacing-xl)' }}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="glass-card text-center"
                            style={{
                                padding: 'var(--spacing-xl)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                minHeight: '380px',
                                justifyContent: 'space-between'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 * index }}
                        >
                            <div style={{ marginBottom: 'var(--spacing-lg)', height: '80px', display: 'flex', alignItems: 'center' }}>
                                {card.animation}
                            </div>
                            <div>
                                <h4 className="mb-md" style={{ fontWeight: 500, lineHeight: 1.4 }}>{card.title}</h4>
                                <p className="mb-0" style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 300 }}>
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
