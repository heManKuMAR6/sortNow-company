import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroAnimation from './HeroAnimation';

const Hero = () => {
    return (
        <section className="hero" style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(circle at 10% 10%, rgba(31, 111, 139, 0.04) 0%, transparent 40%), radial-gradient(circle at 90% 90%, rgba(255, 111, 97, 0.03) 0%, transparent 40%)'
        }}>
            <HeroAnimation opacity={0.5} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="hero-content text-center">
                    <div className="hero-top-text" style={{ marginBottom: '1.5rem' }}>
                        <motion.span
                            initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                color: 'var(--color-warm-coral)',
                                textTransform: 'uppercase',
                                fontSize: '1.1rem',
                                fontWeight: 300,
                                letterSpacing: '0.3em',
                                display: 'inline-block'
                            }}
                        >
                            Are you sorted?
                        </motion.span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="hero-title mb-lg">
                            We untangle the chaos and make it <span className="text-secondary italic">work<span className="highlight-dot">.</span></span>
                        </h1>
                        <motion.p
                            className="hero-subtitle mb-xl"
                            style={{ maxWidth: '800px', margin: '0 auto var(--spacing-xl) auto' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            Software, ML, and Cloud Engineering for teams that need production-ready systems.
                        </motion.p>
                        <motion.div
                            className="flex-center gap-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.1 }}
                        >
                            <a href="#solution" className="btn btn-primary btn-lg">View Our Work</a>
                            <Link to="/contact" className="btn btn-secondary btn-lg">Start a Conversation →</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                style={{
                    position: 'absolute', bottom: '2rem', left: '50%', x: '-50%',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                    opacity: 0.6
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll</span>
                <div style={{ width: '1px', height: '30px', background: 'var(--color-deep-teal)' }} />
            </motion.div>
        </section>
    );
};

export default Hero;
