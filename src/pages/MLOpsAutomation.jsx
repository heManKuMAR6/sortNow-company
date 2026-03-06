import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const MLOpsAutomation = () => {
    return (
        <div className="case-study-page">
            <Navbar />

            <section className="case-hero" style={{
                paddingTop: '12rem',
                paddingBottom: '8rem',
                backgroundColor: 'var(--color-off-white)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container-narrow text-center" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge" style={{ marginBottom: '2rem', color: 'var(--color-sunny-yellow)', background: 'rgba(255, 209, 102, 0.1)', borderColor: 'rgba(255, 209, 102, 0.2)' }}>Process Automation</span>
                        <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-soft-charcoal)' }}>
                            <span style={{ color: '#E5B830' }}>MLOps</span> & Lifecycle Automation
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
                            How we bring software engineering rigor—CI/CD, version control, and continuous monitoring—to machine learning workflows.
                        </p>
                    </motion.div>
                </div>

                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(255, 209, 102, 0.15) 0%, transparent 70%)',
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
                                <h4 style={{ color: '#E5B830', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>At a Glance</h4>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                                    <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Core Stack</strong>
                                        MLflow, Kubeflow, GitHub Actions, Evidently
                                    </li>
                                    <li style={{ color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Impact</strong>
                                        Automated retraining, zero downtime
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
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>The Challenge: Concept Drift</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    Unlike traditional software, machine learning systems degrade silently. As real-world data distributions change (concept drift), models lose accuracy. Without automated monitoring, companies operate on confidently wrong predictions for months before noticing.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>Our Solution</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    We treat models not as static artifacts, but as living pipelines.
                                </p>

                                <div className="glass-card" style={{ background: 'var(--color-off-white)', border: 'none', marginBottom: '3rem', padding: '2.5rem' }}>
                                    <h4 style={{ color: '#E5B830', marginBottom: '1.5rem' }}>The Automaton Tier</h4>
                                    <ul className="job-list">
                                        <li><strong>Experiment Tracking:</strong> Using MLflow to meticulously log hyperparameters, metrics, and data versions so every experiment is perfectly reproducible.</li>
                                        <li><strong>Continuous Training (CT):</strong> Setting up Airflow or Kubeflow pipelines that automatically trigger retraining jobs when performance dips or new data thresholds are met.</li>
                                        <li><strong>A/B and Shadow Deployments:</strong> Safely rolling out new model iterations side-by-side with production traffic to objectively measure business lift.</li>
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

export default MLOpsAutomation;
