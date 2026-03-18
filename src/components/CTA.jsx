import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

/**
 * Refined "CTA" section (CTA.jsx)
 * Features a high-contrast, premium "Final Invitation" with a calm background wave.
 */

const CTA = () => {
    const MotionLink = motion(Link);
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <section style={{ paddingTop: '80px', paddingBottom: '160px', background: 'white', position: 'relative' }}>

            <div className="container">
                <motion.div
                    className="glass-card"
                    style={{
                        background: 'rgba(255, 255, 255, 0.75)',
                        backdropFilter: 'blur(20px)',
                        color: 'var(--text-primary)',
                        padding: 'var(--spacing-4xl) var(--spacing-2xl)',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px solid rgba(31, 111, 139, 0.5)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.9)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1,
                        boxShadow: '0 50px 100px rgba(31, 111, 139, 0.15), 0 20px 40px rgba(31, 111, 139, 0.1), inset 0 2px 5px rgba(255, 255, 255, 0.8)',
                        overflow: 'hidden',
                        transform: 'translateZ(0)'
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Untangling Chaos Animation Background */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.7, pointerEvents: 'none' }}>
                        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
                            <motion.path
                                fill="none"
                                stroke="rgba(31, 111, 139, 0.4)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                initial={{ d: "M -100 180 C 300 -100, 700 300, 1100 20" }}
                                animate={{
                                    d: [
                                        "M -100 180 C 300 -100, 700 300, 1100 20",
                                        "M -100 60 C 333 60, 666 60, 1100 60",
                                        "M -100 180 C 300 -100, 700 300, 1100 20"
                                    ]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.path
                                fill="none"
                                stroke="rgba(142, 68, 173, 0.35)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                initial={{ d: "M -100 20 C 200 300, 800 -150, 1100 180" }}
                                animate={{
                                    d: [
                                        "M -100 20 C 200 300, 800 -150, 1100 180",
                                        "M -100 100 C 333 100, 666 100, 1100 100",
                                        "M -100 20 C 200 300, 800 -150, 1100 180"
                                    ]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            />
                            <motion.path
                                fill="none"
                                stroke="rgba(46, 204, 113, 0.3)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                initial={{ d: "M -100 120 C 400 350, 600 -150, 1100 50" }}
                                animate={{
                                    d: [
                                        "M -100 120 C 400 350, 600 -150, 1100 50",
                                        "M -100 140 C 333 140, 666 140, 1100 140",
                                        "M -100 120 C 400 350, 600 -150, 1100 50"
                                    ]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </svg>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ color: 'var(--color-deep-teal)', fontWeight: 300, fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>
                            Ready to untangle the chaos?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto var(--spacing-2xl) auto', fontWeight: 300, lineHeight: 1.6 }}>
                            Stop managing complexity and start building systems that work. One conversation can change the entire technical trajectory of your business.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <MotionLink
                                to="/contact"
                                className="btn btn-primary btn-lg"
                                style={{ minWidth: '220px' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sort My Systems →
                            </MotionLink>
                            <motion.a
                                href="/"
                                className="btn btn-outline btn-lg"
                                style={{ borderColor: 'rgba(31, 111, 139, 0.3)', color: 'var(--text-primary)', minWidth: '220px' }}
                                whileHover={{ background: 'rgba(31, 111, 139, 0.05)' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (location.pathname === '/' || location.pathname === '') {
                                        const el = document.getElementById('solution');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        navigate('/#solution');
                                    }
                                }}
                            >
                                View Our Services
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
