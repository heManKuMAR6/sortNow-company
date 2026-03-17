import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Refined "Footer" section (Footer.jsx)
 * Minimalist, elegant, and perfectly aligned with the premium aesthetic.
 */

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: 'var(--bg-primary)', padding: 'var(--spacing-5xl) 0 var(--spacing-xl) 0', borderTop: '1px solid var(--color-light-gray)' }}>
            <div className="container">
                <div className="grid grid-4" style={{ gap: 'var(--spacing-2xl)', marginBottom: 'var(--spacing-4xl)' }}>

                    {/* Brand Column */}
                    <div className="footer-col" style={{ gridColumn: 'span 2' }}>
                        <a href="#" className="logo mb-md" style={{ display: 'block' }}>
                            <div className="logo-line-1" style={{ fontSize: '1.5rem' }}>sortNow</div>
                            <div className="logo-line-2" style={{ fontSize: '1rem' }}>& Company<span className="highlight-dot">.</span></div>
                        </a>
                        <p style={{ maxWidth: 300, color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.6 }}>
                            We untangle the chaos and make it work. Premium engineering for businesses that value clarity over noise.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-lg)' }}>Navigation</h4>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                            <li className="mb-sm"><Link to="/#trust" className="nav-link-footer">About</Link></li>
                            <li className="mb-sm"><Link to="/#problem" className="nav-link-footer">How We Work</Link></li>
                            <li className="mb-sm"><Link to="/#solution" className="nav-link-footer">Services</Link></li>
                            <li className="mb-sm"><Link to="/contact" className="nav-link-footer">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4 style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-lg)' }}>Connect</h4>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                            <li className="mb-sm"><a href="mailto:hello@sortnow.co" className="nav-link-footer">hello@sortnow.co</a></li>
                            <li className="mb-sm"><a href="https://linkedin.com/company/sortnow" target="_blank" rel="noreferrer" className="nav-link-footer">LinkedIn</a></li>
                            <li className="mb-sm"><a href="https://linkedin.com/company/sortnow" target="_blank" rel="noreferrer" className="nav-link-footer">LinkedIn</a></li>
                            <li className="mb-sm"><a href="https://twitter.com/sortnow" target="_blank" rel="noreferrer" className="nav-link-footer">Twitter / X</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--color-light-gray)',
                    paddingTop: 'var(--spacing-xl)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 0 }}>
                        © {currentYear} sortNow & Company. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {/* Legal links omitted until pages are created */}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .nav-link-footer {
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.95rem;
                    font-weight: 300;
                    transition: color 0.3s ease;
                }
                .nav-link-footer:hover {
                    color: var(--color-deep-teal);
                }
            `}} />
        </footer>
    );
};

export default Footer;
