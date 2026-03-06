import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Refined "Services" section (Services.jsx)
 * Simplifies complex service descriptions into high-impact animated cards.
 * Aligns with the premium "Apple-like" aesthetic.
 */

const services = [
    {
        title: "Modern Data Warehousing",
        desc: "Unified Snowflake, BigQuery, or Redshift architectures with consolidated ELT pipelines for a single source of truth.",
        color: "var(--color-deep-teal)",
        link: "/services/modern-data-warehousing",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.path d="M10 20 L 30 10 L 50 20 L 30 30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M10 30 L 30 20 L 50 30 L 30 40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M10 40 L 30 30 L 50 40 L 30 50 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M10 20 V 40" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M30 30 V 50" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M50 20 V 40" stroke="currentColor" strokeWidth="1.5" />
                <motion.circle cx="30" cy="20" r="2" fill="currentColor">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                </motion.circle>
            </svg>
        )
    },
    {
        title: "Production ML Systems",
        desc: "Turning Promising models into robust APIs. We handle feature stores, containerization, and sub-100ms latency serving.",
        color: "var(--color-soft-mint)",
        link: "/services/production-ml-systems",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.rect x="15" y="15" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M30 15 V 45 M 15 30 H 45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <motion.rect x="27" y="27" width="6" height="6" fill="currentColor">
                    <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="4s" repeatCount="indefinite" />
                </motion.rect>
            </svg>
        )
    },
    {
        title: "MLOps & Automation",
        desc: "Standardizing the ML lifecycle with MLflow and CI/CD. One-click deployments and automated drift detection.",
        color: "var(--color-sunny-yellow)",
        link: "/services/mlops-automation",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.path d="M10 30 A 20 20 0 1 1 50 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
                <motion.path d="M50 30 A 20 20 0 1 1 10 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M45 25 L 50 30 L 45 35" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M15 35 L 10 30 L 15 25" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        )
    },
    {
        title: "Cloud Infrastructure",
        desc: "Secure, auto-scaling architectures on AWS/GCP/Azure. Cost optimization strategies that reduce spend by 30-50%.",
        color: "var(--color-warm-coral)",
        link: "/services/cloud-infrastructure",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.path d="M15 40 A 10 10 0 0 1 25 30 A 12 12 0 0 1 45 35 A 8 8 0 0 1 55 45 H 15 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M30 30 V 15 M 25 20 L 30 15 L 35 20" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
                </motion.path>
            </svg>
        )
    },
    {
        title: "Technical Partnership",
        desc: "Fractional CTO and senior engineering leadership. Strategic planning and team mentoring without the full-time cost.",
        color: "#1F6F8B", // Deep Teal
        link: "/services/technical-partnership",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.circle cx="20" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.circle cx="40" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M10 50 Q 20 40 30 50 Q 40 40 50 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M30 25 V 35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
        )
    },
    {
        title: "AI Voice Assistants",
        desc: "24/7 AI-driven customer service for local businesses. Powered by ElevenLabs/Cartesia for automated end-to-end workflows.",
        color: "#8E44AD", // Purple
        link: "/services/ai-customer-service",
        icon: (
            <svg viewBox="0 0 60 60" width="40" height="40">
                <motion.path d="M20 25 C 20 15, 40 15, 40 25 V 35 C 40 45, 20 45, 20 35 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <motion.path d="M15 30 A 15 15 0 0 0 45 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <motion.path d="M30 45 V 55 M 25 55 H 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        )
    }
];

const Services = () => {
    return (
        <section id="solution" style={{ padding: 'var(--spacing-5xl) 0' }}>
            <div className="container">
                <div className="text-center mb-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontWeight: 300 }}>We take the guesswork out of your systems<span className="highlight-dot">.</span></h2>
                        <p style={{ maxWidth: 700, margin: '1rem auto 0 auto', color: 'var(--text-secondary)', fontWeight: 300, fontSize: '1.2rem' }}>
                            From data to AI, pipelines to platforms — we create systems that work reliably and efficiently.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-3" style={{ gap: 'var(--spacing-xl)' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            style={{
                                padding: 'var(--spacing-xl)',
                                borderLeft: `1px solid ${service.color}`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                minHeight: '300px'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                        >
                            <div style={{ color: service.color, marginBottom: 'var(--spacing-lg)' }}>
                                {service.icon}
                            </div>
                            <h4 style={{ fontWeight: 500, marginBottom: 'var(--spacing-md)' }}>{service.title}</h4>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6, marginBottom: 'var(--spacing-lg)' }}>
                                {service.desc}
                            </p>

                            {service.link ? (
                                <Link to={service.link} style={{ textDecoration: 'none', marginTop: 'auto' }}>
                                    <motion.div
                                        style={{ fontSize: '0.85rem', color: service.color, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                                        whileHover={{ x: 5 }}
                                    >
                                        LEARN MORE →
                                    </motion.div>
                                </Link>
                            ) : (
                                <motion.div
                                    style={{ marginTop: 'auto', fontSize: '0.85rem', color: service.color, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                                    whileHover={{ x: 5 }}
                                >
                                    LEARN MORE →
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Value Prop Card */}
                <motion.div
                    className="glass-card"
                    style={{
                        marginTop: 'var(--spacing-xl)',
                        marginBottom: '100px',
                        background: 'rgba(255, 255, 255, 0.75)',
                        backdropFilter: 'blur(20px)',
                        color: 'var(--text-primary)',
                        padding: 'var(--spacing-4xl) var(--spacing-2xl)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid rgba(31, 111, 139, 0.5)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.9)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.6)',
                        boxShadow: '0 50px 100px rgba(31, 111, 139, 0.15), 0 20px 40px rgba(31, 111, 139, 0.1), inset 0 2px 5px rgba(255, 255, 255, 0.8)',
                        position: 'relative',
                        overflow: 'hidden',
                        transform: 'translateZ(0)'
                    }}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Predictable, orderly system animation background */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden', opacity: 0.6 }}>
                        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid slice">
                            {/* Orderly dot grid */}
                            <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="rgba(31, 111, 139, 0.15)" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#dotGrid)" />

                            {/* Perfectly routed, predictable paths ("no black boxes") */}
                            <motion.polyline
                                points="0,40 200,40 200,120 400,120 400,80 800,80 800,160 1040,160"
                                fill="none"
                                stroke="rgba(31, 111, 139, 0.5)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                                transition={{ duration: 6, repeat: Infinity, times: [0, 0.7, 1], ease: "easeInOut" }}
                            />
                            <motion.polyline
                                points="1040,120 600,120 600,40 300,40 300,160 -40,160"
                                fill="none"
                                stroke="rgba(31, 111, 139, 0.4)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                                transition={{ duration: 7, repeat: Infinity, times: [0, 0.7, 1], ease: "easeInOut", delay: 1 }}
                            />
                            <motion.polyline
                                points="-40,160 280,160 280,80 680,80 680,120 1040,120"
                                fill="none"
                                stroke="rgba(31, 111, 139, 0.6)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                                transition={{ duration: 5, repeat: Infinity, times: [0, 0.7, 1], ease: "easeInOut", delay: 2.5 }}
                            />
                        </svg>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ color: 'var(--color-deep-teal)', fontWeight: 400, fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>
                            Technology finally works the way it should.
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.2rem', fontWeight: 300, marginBottom: 'var(--spacing-2xl)' }}>
                            No fluff, no black boxes. Just senior engineering that helps you grow instead of slowing you down.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--color-deep-teal)', color: 'white' }}>
                            Start a Conversation →
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
