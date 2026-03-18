import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ParticleBackground from '../components/ParticleBackground';

const TechnicalPartnership = () => {
    return (
        <div className="case-study-page">
            <Helmet>
                <title>Technical Partnership | sortNow & Company</title>
                <meta name="description" content="Fractional CTO and senior engineering leadership without the full-time cost." />
            </Helmet>
            <Navbar />

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
                        <span className="badge" style={{ marginBottom: '2rem', color: '#1F6F8B', background: 'rgba(31, 111, 139, 0.1)', borderColor: 'rgba(31, 111, 139, 0.2)' }}>Leadership</span>
                        <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-soft-charcoal)' }}>
                            <span style={{ color: '#1F6F8B' }}>Technical</span> Partnership
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
                            Fractional executive leadership to guide architectural decisions, align engineering with business goals, and bypass catastrophic tech debt.
                        </p>
                    </motion.div>
                </div>

                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(31, 111, 139, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }} />
            </section>

            <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
                <div className="container-narrow">
                    <div className="grid grid-2" style={{ gap: 'var(--spacing-3xl)', gridTemplateColumns: '1fr 2fr' }}>

                        <div className="cs-sidebar">
                            <motion.div
                                style={{ position: 'sticky', top: '120px' }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 style={{ color: '#1F6F8B', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>At a Glance</h4>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                                    <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Service Model</strong>
                                        Fractional CTO / Senior Advisory
                                    </li>
                                    <li style={{ color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Focus</strong>
                                        Strategy, Architecture, Scaling
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        <div className="cs-content" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>The Challenge: Strategic Vacuum</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    Founders and non-technical teams often build rapidly, resulting in what we call a "Frankenstein architecture"—systems bolted together that work for the first 1,000 users but collapse at 100,000. Hiring a full-time, experienced CTO is expensive and highly competitive.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>Our Value Proposition</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    We embed into your leadership layer to act as the technical compass, providing the experience of a seasoned CTO on a fractional basis.
                                </p>

                                <div className="glass-card" style={{ background: 'var(--color-off-white)', border: 'none', marginBottom: '3rem', padding: '2.5rem' }}>
                                    <h4 style={{ color: '#1F6F8B', marginBottom: '1.5rem' }}>Core Operations</h4>
                                    <ul className="job-list">
                                        <li><strong>Buy vs. Build Decisions:</strong> Validating technology choices to prevent you from reinventing the wheel or locking into the wrong vendor.</li>
                                        <li><strong>Team Mentorship:</strong> Instilling senior-level engineering practices (code reviews, testing rigor, CI/CD) into junior and mid-level developer teams.</li>
                                        <li><strong>Due Diligence & Scalability:</strong> Reviewing codebases and data architectures to prepare for Series-A+ funding rounds or high-traffic launches.</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
            <Footer />
        </div>
    );
};

export default TechnicalPartnership;
