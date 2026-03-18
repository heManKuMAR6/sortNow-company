import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ParticleBackground from '../components/ParticleBackground';

const ModernDataWarehousing = () => {
    return (
        <div className="case-study-page">
            <Helmet>
                <title>Modern Data Warehousing | sortNow & Company</title>
                <meta name="description" content="Snowflake, BigQuery, and dbt architectures that give you a single source of truth." />
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
                        <span className="badge" style={{ marginBottom: '2rem' }}>Case Study & Best Practices</span>
                        <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-soft-charcoal)' }}>
                            The Era of <span style={{ color: 'var(--color-deep-teal)' }}>Modern Data</span> Warehousing
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
                            How organizations are moving from fragmented, slow, and expensive legacy systems to unified, cloud-native data architectures.
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
                    background: 'radial-gradient(circle, rgba(143, 221, 231, 0.2) 0%, transparent 70%)',
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
                                <h4 style={{ color: 'var(--color-deep-teal)', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>At a Glance</h4>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                                    <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Core Technologies</strong>
                                        Snowflake, BigQuery, dbt, Fivetran
                                    </li>
                                    <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Average ROI</strong>
                                        300% within 12 months
                                    </li>
                                    <li style={{ color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Query Latency</strong>
                                        Reduced by up to 90%
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
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>The Challenge: Data Chaos</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    In many enterprises, data is trapped in operational silos. Finance has their CRM exports, marketing runs on separate spreadsheets, and product teams only look at application databases.
                                    When leadership asks a simple question like <span style={{ fontStyle: 'italic', color: 'var(--text-primary)' }}>"What is our true customer acquisition cost?"</span> it triggers a week-long scramble of manual Excel v-lookups.
                                </p>
                                <p style={{ marginBottom: '3rem' }}>
                                    Legacy ETL (Extract, Transform, Load) pipelines are brittle. They break silently, they can't handle schema changes gracefully, and they tightly couple storage with compute, making scaling prohibitively expensive.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>Our Best Practices & Solution</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    We implement the <strong>Modern Data Stack (MDS)</strong>, leveraging an ELT (Extract, Load, Transform) paradigm. By loading raw data directly into a highly scalable cloud data warehouse (like Snowflake or BigQuery), we decouple compute from storage and push transformations down to the warehouse itself using tools like dbt.
                                </p>

                                <div className="glass-card" style={{ background: 'var(--color-off-white)', border: 'none', marginBottom: '3rem', padding: '2.5rem' }}>
                                    <h4 style={{ color: 'var(--color-deep-teal)', marginBottom: '1.5rem' }}>The Four Pillars of Implementation</h4>
                                    <ul className="job-list">
                                        <li><strong>Automated Ingestion (Fivetran/Airbyte):</strong> Zero-maintenance connectors that replicate raw source data into the warehouse continuously.</li>
                                        <li><strong>Cloud Data Warehouse (Snowflake/BigQuery):</strong> Infinite, elastic scaling where storage costs pennies and compute scales dynamically per query.</li>
                                        <li><strong>Data Transformation (dbt):</strong> Treating data infrastructure as code. We write modular SQL with version control, automated testing, and CI/CD baked in.</li>
                                        <li><strong>Observability (Monte Carlo/Datafold):</strong> Automated anomaly detection to catch bad data upstream before it contaminates executive dashboards.</li>
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
                                    When data is democratized and governed centrally, the entire organization shifts from reactive reporting to proactive analytics.
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-3" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
                                    <div style={{ padding: '1.5rem 0', borderTop: '2px solid var(--color-deep-teal)' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--color-deep-teal)', lineHeight: 1 }}>10x</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Faster Query Times</div>
                                    </div>
                                    <div style={{ padding: '1.5rem 0', borderTop: '2px solid var(--color-warm-coral)' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--color-warm-coral)', lineHeight: 1 }}>50%</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cost Reduction</div>
                                    </div>
                                    <div style={{ padding: '1.5rem 0', borderTop: '2px solid var(--color-sunny-yellow)' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: '#e6b338', lineHeight: 1 }}>1 Source</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Of Absolute Truth</div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Quote / Pullout */}
            <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-deep-teal)', color: 'white' }}>
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
                            "A data warehouse isn't just about storing data. It's about fundamentally reshaping how fast a company can make confident decisions."
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

export default ModernDataWarehousing;
