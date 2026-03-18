import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ParticleBackground from '../components/ParticleBackground';

const AICustomerService = () => {
    return (
        <div className="case-study-page">
            <Helmet>
                <title>AI Voice Assistants | sortNow & Company</title>
                <meta name="description" content="24/7 AI voice automation for restaurants, motels, and clinics. Zero missed calls." />
            </Helmet>
            <Navbar />

            {/* Hero Section */}
            <section className="case-hero" style={{
                paddingTop: '12rem',
                paddingBottom: '8rem',
                backgroundColor: 'var(--color-off-white)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <ParticleBackground />
                <div className="container-narrow text-center" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge" style={{ marginBottom: '2rem', color: '#8E44AD', background: 'rgba(142, 68, 173, 0.1)', borderColor: 'rgba(142, 68, 173, 0.2)' }}>Specialized Capability</span>
                        <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-soft-charcoal)' }}>
                            24/7 <span style={{ color: '#8E44AD' }}>AI Voice Assistants</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
                            Automating customer service operations for motels, restaurants, and clinics to ensure 100% uptime and zero missed opportunities.
                        </p>
                    </motion.div>
                </div>

                {/* Background decorative elements */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(142, 68, 173, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }} />
            </section>

            {/* Main Content Grid */}
            <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
                <div className="container-narrow">
                    <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)', gridTemplateColumns: '1fr 2fr' }}>

                        {/* Sticky Sidebar */}
                        <div className="cs-sidebar">
                            <motion.div
                                style={{ position: 'sticky', top: '120px' }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 style={{ color: '#8E44AD', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>At a Glance</h4>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                                    <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Core Technologies</strong>
                                        ElevenLabs, Cartesia, LLMs
                                    </li>
                                    <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Integration Time</strong>
                                        Under 2 Weeks
                                    </li>
                                    <li style={{ color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Service Availability</strong>
                                        24 / 7 / 365
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Article Content */}
                        <div className="cs-content" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>The Challenge: Missed Calls, Missed Revenue</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    Local services—ranging from busy restaurants taking reservations, to dental clinics juggling appointments, to motels managing late-night check-ins—struggle with a common operational bottleneck: <strong>the front desk.</strong>
                                </p>
                                <p style={{ marginBottom: '3rem' }}>
                                    Staffing a reception desk 24/7 is prohibitively expensive. Yet, every phone call that goes to voicemail translates to a high likelihood of a lost customer. When your employees are physically assisting a guest, answering the phone disrupts the on-site experience, creating a zero-sum game of customer satisfaction.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>Our Solution: End-to-End Voice Automation</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    We build custom AI Voice Assistants designed specifically for your business's offerings. Instead of robotic, menu-driven IVR systems ("Press 1 for..."), your customers speak naturally to an AI that sounds completely human, powered by ultra-low-latency voice generation networks like <strong>ElevenLabs</strong> and <strong>Cartesia</strong>.
                                </p>

                                <div className="glass-card" style={{ background: 'var(--color-off-white)', border: 'none', marginBottom: '3rem', padding: '2.5rem' }}>
                                    <h4 style={{ color: '#8E44AD', marginBottom: '1.5rem' }}>The Autonomous Workflow</h4>
                                    <ul className="job-list">
                                        <li><strong>Human-Like Interactions:</strong> The AI can understand accents, interruptions, and complex requests in real-time, holding a natural conversation.</li>
                                        <li><strong>Deep Software Integration:</strong> We don't just answer questions; we execute tasks. The agent integrates directly with your existing POS, scheduling software, or CRM via APIs.</li>
                                        <li><strong>Action Completion:</strong> From booking a motel room, taking a customized takeout order, to scheduling a dental cleaning—the AI completes the workflow end-to-end.</li>
                                        <li><strong>Seamless Handoff:</strong> If a situation requires human nuance or escalation, the AI gracefully transfers the call with complete context.</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>The Impact</h2>
                                <p style={{ marginBottom: '2.5rem' }}>
                                    By automating the frontline communication, businesses radically decrease disruption while scaling their concurrent service capacity infinitely.
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-3" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
                                    <div style={{ padding: '1.5rem 0', borderTop: '2px solid #8E44AD' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: '#8E44AD', lineHeight: 1 }}>100%</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Answer Rate</div>
                                    </div>
                                    <div style={{ padding: '1.5rem 0', borderTop: '2px solid var(--color-warm-coral)' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--color-warm-coral)', lineHeight: 1 }}>0s</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hold Times</div>
                                    </div>
                                    <div style={{ padding: '1.5rem 0', borderTop: '2px solid var(--color-deep-teal)' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--color-deep-teal)', lineHeight: 1 }}>24x7</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Business Uptime</div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Quote / Pullout */}
            <section style={{ padding: '8rem 0', backgroundColor: '#8E44AD', color: 'white' }}>
                <div className="container-narrow text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ opacity: 0.5, marginBottom: '2rem' }}>
                            <path d="M10 11L8 15H11V18H7V15L9 11H10ZM17 11L15 15H18V18H14V15L16 11H17Z" />
                        </svg>
                        <h3 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 300, lineHeight: 1.4, maxWidth: '800px', margin: '0 auto' }}>
                            "It's not just an answering machine. It's an intelligent employee who knows your entire menu, never takes a break, and actively generates revenue."
                        </h3>
                    </motion.div>
                </div>
            </section>

            {/* Next Steps CTA */}
            <CTA />
            <Footer />
        </div>
    );
};

export default AICustomerService;
