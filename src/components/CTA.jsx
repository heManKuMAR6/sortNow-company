import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Refined "CTA" section (CTA.jsx)
 * Features a high-contrast, premium "Final Invitation" with a calm background wave.
 */

const CTA = () => {
    const MotionLink = motion(Link);
    return (
        <section style={{ padding: 'var(--spacing-5xl) 0', background: 'white', position: 'relative', overflow: 'hidden' }}>

            {/* Subtle background flow similar to the calm side of hero */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, pointerEvents: 'none' }}>
                <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
                    <motion.path
                        d="M0 200 C 250 180, 500 220, 1000 200"
                        fill="none"
                        stroke="var(--color-deep-teal)"
                        strokeWidth="2"
                        animate={{
                            d: [
                                "M0 200 C 250 180, 500 220, 1000 200",
                                "M0 200 C 250 220, 500 180, 1000 200",
                                "M0 200 C 250 180, 500 220, 1000 200"
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M0 220 C 250 200, 500 240, 1000 220"
                        fill="none"
                        stroke="var(--color-warm-coral)"
                        strokeWidth="1"
                        animate={{
                            d: [
                                "M0 220 C 250 200, 500 240, 1000 220",
                                "M0 220 C 250 240, 500 200, 1000 220",
                                "M0 220 C 250 200, 500 240, 1000 220"
                            ]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                </svg>
            </div>

            <div className="container">
                <motion.div
                    className="glass-card"
                    style={{
                        background: 'var(--color-deep-teal)',
                        color: 'white',
                        padding: 'var(--spacing-4xl) var(--spacing-2xl)',
                        borderRadius: 'var(--radius-xl)',
                        border: 'none',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1,
                        boxShadow: '0 40px 100px rgba(31, 111, 139, 0.2)'
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 style={{ color: 'white', fontWeight: 300, fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>
                        Ready to untangle the chaos?
                    </h2>
                    <p style={{ color: 'white', opacity: 0.9, fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto var(--spacing-2xl) auto', fontWeight: 300, lineHeight: 1.6 }}>
                        Stop managing complexity and start building systems that work. One conversation can change the entire technical trajectory of your business.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <MotionLink
                            to="/contact"
                            className="btn btn-primary btn-lg"
                            style={{ background: 'white', color: 'var(--color-deep-teal)', minWidth: '220px' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Sort My Systems →
                        </MotionLink>
                        <motion.a
                            href="#solution"
                            className="btn btn-outline btn-lg"
                            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', minWidth: '220px' }}
                            whileHover={{ background: 'rgba(255,255,255,0.1)' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('solution').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View Our Services
                        </motion.a>
                    </div>

                    {/* Subtle "Trust" indicator */}
                    <p style={{ marginTop: 'var(--spacing-2xl)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
                        NO COMMITMENT · SENIOR ENGINEERS · REAL WORK
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
