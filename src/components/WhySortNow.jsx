import { motion } from 'framer-motion';

/**
 * Refined "Why SortNow" section (WhySortNow.jsx)
 * Aligned with the light/glass theme of the rest of the site.
 */

const WhySortNow = () => {
    return (
        <section className="section-visual" id="why" style={{ background: 'white', color: 'var(--text-primary)', padding: 'var(--spacing-5xl) 0', overflow: 'hidden' }}>
            <div className="container-narrow text-center">

                {/* Metaphor Animation: The Balance Scale */}
                <div style={{ marginBottom: 'var(--spacing-3xl)', display: 'flex', justifyContent: 'center' }}>
                    <svg width="120" height="80" viewBox="0 0 120 80">
                        {/* The Base */}
                        <motion.path d="M40 70 L 80 70 L 60 50 Z" fill="rgba(31, 111, 139, 0.1)" />

                        {/* The Beam */}
                        <motion.line
                            x1="20" y1="50" x2="100" y2="50"
                            stroke="var(--color-deep-teal)" strokeWidth="2"
                            animate={{ rotate: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Ferrari (Left) */}
                        <motion.circle
                            cx="20" cy="55" r="4" fill="var(--color-warm-coral)"
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Bicycle (Right) */}
                        <motion.circle
                            cx="100" cy="45" r="4" fill="var(--color-soft-mint)"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

                <motion.h2
                    className="mb-lg"
                    style={{ color: 'var(--text-primary)', fontWeight: 300, fontSize: 'var(--font-size-3xl)', letterSpacing: '-0.02em' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    We won’t recommend a Ferrari if you need a bicycle.
                </motion.h2>

                <div style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.8 }}>
                    <p className="mb-md">Some consulting firms default to bigger, newer, more expensive solutions. We don’t.</p>
                    <p className="mb-3xl">We believe the best solution is the one that actually works for you.</p>
                </div>

                <motion.div
                    className="glass-card"
                    style={{
                        background: 'rgba(31, 111, 139, 0.03)',
                        borderColor: 'rgba(31, 111, 139, 0.1)',
                        padding: 'var(--spacing-2xl)',
                        borderRadius: 'var(--radius-lg)'
                    }}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p style={{ color: 'var(--text-primary)', fontStyle: 'italic', fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                        "Because our job isn’t to sell you more technology. It’s to make sure you have the right technology for where you are, and where you’re going."
                    </p>
                </motion.div>

                <motion.div
                    className="mt-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h3 className="mb-md" style={{ color: 'var(--color-deep-teal)', fontWeight: 400 }}>No drama. No fluff. No unnecessary rebuilds.</h3>
                    <p style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>Even if it means less profit for us, we’ll make sure you’re sorted.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhySortNow;
