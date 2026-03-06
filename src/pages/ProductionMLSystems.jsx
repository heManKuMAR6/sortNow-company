import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const ProductionMLSystems = () => {
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
                        <span className="badge" style={{ marginBottom: '2rem', color: 'var(--color-deep-teal)', background: 'rgba(31, 111, 139, 0.1)', borderColor: 'rgba(31, 111, 139, 0.2)' }}>Engineering Focus</span>
                        <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-soft-charcoal)' }}>
                            <span style={{ color: 'var(--color-soft-mint)' }}>Productionizing</span> ML Systems
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
                            How we take brilliant data science models out of Jupyter notebooks and turn them into resilient, ultra-fast production APIs.
                        </p>
                    </motion.div>
                </div>

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
                                <h4 style={{ color: 'var(--color-soft-mint)', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>At a Glance</h4>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                                    <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Core Stack</strong>
                                        FastAPI, Triton, ONNX, Kubernetes
                                    </li>
                                    <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Target Latency</strong>
                                        &lt; 50ms p99
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
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>The Challenge: The Notebook Trap</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    Data science teams spend months building highly accurate predictive models, often in local Jupyter environments.
                                    However, when it's time to integrate these models into a live application, the transition fails. Ad-hoc Python scripts crash under load, models take seconds to infer, and feature engineering logic doesn't scale.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>Our Approach</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    We bridge the gap between Data Science and Software Engineering. By treating ML models as critical microservices, we ensure they are robust, scalable, and observable.
                                </p>

                                <div className="glass-card" style={{ background: 'var(--color-off-white)', border: 'none', marginBottom: '3rem', padding: '2.5rem' }}>
                                    <h4 style={{ color: 'var(--color-soft-mint)', marginBottom: '1.5rem' }}>Production Engineering Standards</h4>
                                    <ul className="job-list">
                                        <li><strong>Model Optimization:</strong> Converting PyTorch and TensorFlow models to ONNX or TensorRT formats for hardware-accelerated inference.</li>
                                        <li><strong>High-Performance Serving:</strong> Wrapping models in optimized servers like NVIDIA Triton or FastAPI, handling batching and parallel execution.</li>
                                        <li><strong>Feature Stores:</strong> Implementing a unified layer (like Feast) so the exact same features used in training are served in real-time online inference with millisecond latency.</li>
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
                                <div className="grid grid-3" style={{ gap: '1.5rem', marginBottom: '3rem', marginTop: '2rem' }}>
                                    <div style={{ padding: '1.5rem 0', borderTop: '2px solid var(--color-soft-mint)' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--color-soft-mint)', lineHeight: 1 }}>50ms</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>P99 Inference</div>
                                    </div>
                                    <div style={{ padding: '1.5rem 0', borderTop: '2px solid var(--color-deep-teal)' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--color-deep-teal)', lineHeight: 1 }}>100%</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Feature Consistency</div>
                                    </div>
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

export default ProductionMLSystems;
