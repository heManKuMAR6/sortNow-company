import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');

    // Scroll effect for Navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ScrollSpy logic
    useEffect(() => {
        if (location.pathname !== '/') return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: "-100px 0px -50% 0px"
        });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(s => observer.observe(s));

        return () => sections.forEach(s => observer.unobserve(s));
    }, [location.pathname]);

    const handleNavClick = (e, id) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') return;

        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${id}`);
        }
    };

    const isHome = location.pathname === '/';

    const MotionLink = motion(Link);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="nav-container">
                <Link to={isHome ? '/' : '/'} className="logo" onClick={(e) => {
                    if (isHome) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        window.history.pushState(null, '', '/');
                    }
                }}>
                    <div className="logo-line-1">sortNow</div>
                    <div className="logo-line-2" contentEditable={false}>
                        & Company<span className="highlight-dot">.</span>
                    </div>
                </Link>

                <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2xl)' }}>
                    <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        <li><a href={isHome ? "#trust" : "/#trust"} className={`nav-link ${activeSection === 'trust' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'trust')}>About</a></li>
                        <li><a href={isHome ? "#problem" : "/#problem"} className={`nav-link ${activeSection === 'problem' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'problem')}>How We Work</a></li>
                        <li><a href={isHome ? "#solution" : "/#solution"} className={`nav-link ${activeSection === 'solution' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'solution')}>Services</a></li>
                        <li><a href={isHome ? "#story" : "/#story"} className={`nav-link ${activeSection === 'story' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, 'story')}>Team</a></li>
                    </ul>

                    <MotionLink
                        to="/contact"
                        className="btn btn-primary"
                        style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let's Talk →
                    </MotionLink>
                </div>

                <button
                    className="mobile-menu-toggle"
                    aria-label="Toggle menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
