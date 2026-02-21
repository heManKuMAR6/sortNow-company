import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    return (
        <div className="contact-page">
            <Navbar />

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="container">
                    <div className="hero-content">
                        <motion.h1
                            style={{ marginBottom: '1rem' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Let's Talk
                        </motion.h1>
                        <motion.p
                            className="hero-subtitle"
                            style={{ animation: 'none' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Start the conversation about transforming your data and AI capabilities
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section style={{ padding: 'var(--spacing-3xl) 0' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'start' }}>

                        {/* Contact Information */}
                        <motion.div {...fadeIn}>
                            <div className="glass-card glass-card-lg mb-xl">
                                <h2 className="mb-md">Book a Strategy Call</h2>
                                <p className="mb-lg">Every engagement starts with a conversation. We'll discuss your challenges,
                                    explore potential solutions, and determine if we're the right fit for your needs.</p>

                                <h4 className="mb-md" style={{ fontSize: 'var(--font-size-lg)' }}>What to Expect:</h4>
                                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: 2, marginBottom: '1.5rem' }}>
                                    <li>30-minute introductory call with one of our partners</li>
                                    <li>Discussion of your current challenges and goals</li>
                                    <li>High-level assessment of potential solutions</li>
                                    <li>No sales pressure — just honest technical conversation</li>
                                    <li>Clear next steps if we decide to move forward</li>
                                </ul>

                                <h4 className="mb-md" style={{ fontSize: 'var(--font-size-lg)' }}>Contact Information:</h4>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> <a href="mailto:hello@sortnow.co" style={{ color: 'var(--color-deep-teal)' }}>hello@sortnow.co</a></p>
                                <p style={{ marginBottom: '1.5rem' }}><strong>Response Time:</strong> Within 24 hours</p>

                                <div className="glass-card glass-card-sm" style={{ background: 'rgba(31, 111, 139, 0.05)', borderColor: 'rgba(31, 111, 139, 0.15)' }}>
                                    <p style={{ margin: 0, fontSize: '0.95rem' }}><strong>Note:</strong> We work with a limited
                                        number of clients to ensure quality and attention. If we're not the right fit, we'll
                                        happily refer you to trusted partners in our network.</p>
                                </div>
                            </div>

                            <div className="glass-card text-center">
                                <h4 className="mb-md">Prefer Email?</h4>
                                <p className="mb-md">Send us a message at <a href="mailto:hello@sortnow.co" style={{ color: 'var(--color-deep-teal)', fontWeight: '600' }}>hello@sortnow.co</a></p>
                                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>We typically respond within one business day</p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
                            <div className="glass-card glass-card-lg">
                                <AnimatePresence mode="wait">
                                    {!submitted ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                        >
                                            <h3 className="mb-lg">Send Us a Message</h3>
                                            <form id="contact-form" onSubmit={(e) => {
                                                e.preventDefault();
                                                setSubmitted(true);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}>
                                                <FormField label="Full Name" id="name" type="text" placeholder="John Smith" required />
                                                <FormField label="Email Address" id="email" type="email" placeholder="john@company.com" required />
                                                <FormField label="Company" id="company" type="text" placeholder="Acme Inc." />
                                                <FormField label="Your Role" id="role" type="text" placeholder="CTO, VP Engineering, etc." />

                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <label htmlFor="interest" className="form-label">What are you interested in?</label>
                                                    <select id="interest" name="interest" className="form-select">
                                                        <option value="">Select a service...</option>
                                                        <option value="data-engineering">Data Engineering & Warehousing</option>
                                                        <option value="ml-production">ML Models to Production</option>
                                                        <option value="mlops">MLOps & CI/CD for ML</option>
                                                        <option value="cloud-architecture">Cloud Architecture & Migration</option>
                                                        <option value="technical-partnership">AI/Data Technical Partnership</option>
                                                        <option value="resource-augmentation">Resource Augmentation</option>
                                                        <option value="not-sure">Not sure yet / Multiple areas</option>
                                                    </select>
                                                </div>

                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <label htmlFor="message" className="form-label">Tell us about your needs *</label>
                                                    <textarea id="message" name="message" className="form-input" style={{ minHeight: '150px', resize: 'vertical' }}
                                                        placeholder="Describe your current challenges, goals, or what you're looking to build..." required></textarea>
                                                </div>

                                                <div style={{ marginBottom: '1.5rem' }}>
                                                    <label htmlFor="timeline" className="form-label">Desired Timeline</label>
                                                    <select id="timeline" name="timeline" className="form-select">
                                                        <option value="">Select timeline...</option>
                                                        <option value="urgent">Urgent (within 2 weeks)</option>
                                                        <option value="soon">Soon (1-2 months)</option>
                                                        <option value="planning">Planning (2-6 months)</option>
                                                        <option value="exploring">Just exploring</option>
                                                    </select>
                                                </div>

                                                <motion.button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    style={{ width: '100%' }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Send Message
                                                </motion.button>

                                                <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                                                    We respect your privacy. Your information will never be shared with third parties.
                                                </p>
                                            </form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                                            style={{ textAlign: 'center', padding: 'var(--spacing-2xl) 0' }}
                                        >
                                            <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-xl)' }}>✨</div>
                                            <h3 className="mb-md">Message Sent!</h3>
                                            <p className="mb-xl" style={{ color: 'var(--text-secondary)' }}>
                                                Thank you for reaching out. One of our partners will review your message and get back to you personally within 24 hours.
                                            </p>
                                            <button
                                                className="btn btn-outline"
                                                onClick={() => setSubmitted(false)}
                                            >
                                                Send Another Message
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section>
                <div className="container-narrow">
                    <motion.div className="text-center mb-2xl" {...fadeIn}>
                        <h2>Frequently Asked Questions</h2>
                    </motion.div>

                    {[
                        { q: "What size companies do you work with?", a: "We work with companies ranging from Series A startups to Fortune 500 enterprises. What matters most is the complexity and impact of the problem, not company size. If you have ambitious data or AI goals and need senior technical expertise, we can likely help." },
                        { q: "What's your typical engagement model?", a: "We offer both project-based engagements (typically 3-6 months) and ongoing retainer partnerships. Project engagements are scoped with clear deliverables and timelines. Retainer partnerships provide dedicated monthly capacity for continuous innovation and support." },
                        { q: "Do you work remotely or on-site?", a: "We're set up for fully remote collaboration with clients worldwide. For critical kickoffs or workshops, we can travel on-site. Our remote-first approach has proven highly effective with weekly demos, daily standups, and continuous communication." },
                        { q: "How quickly can you start?", a: "For most engagements, we can start within 2-3 weeks of signing. This includes time for onboarding, access setup, and initial discovery. For urgent needs, we've started projects in as little as one week." },
                        { q: "What if we're not sure exactly what we need?", a: "That's perfectly fine and actually quite common. Many of our best engagements started with \"we know we need to do something with our data, but we're not sure what.\" We can start with a discovery phase to assess your needs and recommend the right approach." }
                    ].map((faq, index) => (
                        <motion.div
                            key={index}
                            className="glass-card glass-card-lg mb-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h4 className="mb-md">{faq.q}</h4>
                            <p style={{ margin: 0 }}>{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section>
                <div className="container-narrow">
                    <motion.div
                        className="glass-card glass-card-lg text-center"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-md">Ready to Get Started?</h2>
                        <p className="mb-xl">Fill out the form above or email us directly at <a href="mailto:hello@sortnow.co" style={{ color: 'var(--color-deep-teal)', fontWeight: '600' }}>hello@sortnow.co</a></p>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>We look forward to hearing from you.</p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const FormField = ({ label, id, type, placeholder, required }) => (
    <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor={id} className="form-label">{label}{required && ' *'}</label>
        <input type={type} id={id} name={id} className="form-input"
            placeholder={placeholder} required={required} />
    </div>
);

export default Contact;
