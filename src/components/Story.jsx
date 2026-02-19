import { motion } from 'framer-motion';

/**
 * Refined "Story" section (Story.jsx)
 * Focuses on the "Why" with brevity and a unique technical-human animation.
 */

const Story = () => {
    return (
        <section id="story" style={{ padding: 'var(--spacing-5xl) 0', overflow: 'hidden', background: 'white' }}>
            <div className="container">
                <div className="grid grid-2 align-center" style={{ gap: 'var(--spacing-3xl)' }}>

                    {/* Left: Animated Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', maxWidth: '500px', margin: '0 auto' }}>
                            {/* The "Bridge" Animation */}
                            <svg viewBox="0 0 400 400" width="100%" height="100%">
                                {/* Gradient Background Circle */}
                                <defs>
                                    <linearGradient id="storyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--color-soft-mint)" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="var(--color-deep-teal)" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                                <circle cx="200" cy="200" r="180" fill="url(#storyGrad)" />

                                {/* Human Side (Nodes) */}
                                <motion.circle cx="100" cy="200" r="10" fill="var(--color-deep-teal)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} />
                                <motion.circle cx="80" cy="160" r="6" fill="var(--color-deep-teal)" opacity="0.6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6 }} />
                                <motion.circle cx="80" cy="240" r="6" fill="var(--color-deep-teal)" opacity="0.6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.7 }} />

                                {/* Machine Side (Code/Lines) */}
                                <motion.rect x="290" y="190" width="20" height="20" rx="4" fill="var(--color-warm-coral)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 }} />
                                <motion.rect x="310" y="160" width="12" height="12" rx="2" fill="var(--color-warm-coral)" opacity="0.6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.9 }} />
                                <motion.rect x="310" y="230" width="12" height="12" rx="2" fill="var(--color-warm-coral)" opacity="0.6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.0 }} />

                                {/* The Connection (The Bridge) */}
                                <motion.path
                                    d="M110 200 C 150 200, 250 200, 290 200"
                                    fill="none"
                                    stroke="var(--color-deep-teal)"
                                    strokeWidth="2"
                                    strokeDasharray="8 4"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1.2 }}
                                />

                                {/* Pulses moving across the bridge */}
                                <motion.circle
                                    r="4"
                                    fill="var(--color-sunny-yellow)"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        cx: [110, 290],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2.7
                                    }}
                                />
                            </svg>

                            {/* Soft Floating Element */}
                            <motion.div
                                style={{
                                    position: 'absolute', top: '20%', right: '10%', padding: '1rem',
                                    background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)',
                                    borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-deep-teal)'
                                }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Real Conversations.
                            </motion.div>
                            <motion.div
                                style={{
                                    position: 'absolute', bottom: '20%', left: '10%', padding: '1rem',
                                    background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)',
                                    borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-warm-coral)'
                                }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                Real Systems.
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <h2 className="mb-lg" style={{ fontWeight: 300 }}>Bridging the gap between boardroom and backend<span className="highlight-dot">.</span></h2>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 300 }}>
                            <p className="mb-md">SortNow didn’t start in a boardroom. It started with conversations—the kind where you stop pretending everything makes sense and start asking what actually works.</p>
                            <p className="mb-md">We’ve seen both sides. We’ve seen businesses sold complex noise they don’t need, and we’ve seen how technology, when handled with clarity, makes everything quiet.</p>
                            <p className="mb-xl">We didn’t start SortNow to sound smart. We started it because we knew technology doesn’t need more noise. It needs focus.</p>
                        </div>

                        <div className="glass-card" style={{ borderLeft: '4px solid var(--color-warm-coral)', background: 'var(--color-off-white)', padding: '1.5rem' }}>
                            <h4 style={{ fontWeight: 600, color: 'var(--color-deep-teal)', fontSize: '1rem', marginBottom: '0.5rem' }}>Our Absolute Promise</h4>
                            <p className="mb-0" style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>No unnecessary rebuilds. No disappearing after advice. Just honest engineering and systems that work.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Story;
