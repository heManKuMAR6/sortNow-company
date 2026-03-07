import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ParticleBackground from '../components/ParticleBackground';

const CloudInfrastructure = () => {
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
                <ParticleBackground />
                <div className="container-narrow text-center" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge" style={{ marginBottom: '2rem', color: 'var(--color-warm-coral)', background: 'rgba(255, 111, 97, 0.1)', borderColor: 'rgba(255, 111, 97, 0.2)' }}>Platform Scale</span>
                        <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-soft-charcoal)' }}>
                            <span style={{ color: 'var(--color-warm-coral)' }}>Cloud Infrastructure</span> & FinOps
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
                            Designing secure, auto-scaling environments on AWS and GCP that handle millions of requests while slashing unnecessary cloud bills.
                        </p>
                    </motion.div>
                </div>

                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(255, 111, 97, 0.15) 0%, transparent 70%)',
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
                                <h4 style={{ color: 'var(--color-warm-coral)', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>At a Glance</h4>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                                    <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Core Stack</strong>
                                        Terraform, AWS, GCP, Kubernetes
                                    </li>
                                    <li style={{ color: 'var(--text-secondary)' }}>
                                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Avg. Cost Reduction</strong>
                                        30 - 50%
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
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>The Challenge: Runaway Costs</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    Cloud providers make it incredibly easy to start, but notoriously difficult to optimize. Companies often find themselves paying for idle instances, over-provisioned databases, and inefficient network topologies, bleeding tens of thousands of dollars a month without realizing it.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 style={{ color: 'var(--text-primary)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300 }}>Our Strategy</h2>
                                <p style={{ marginBottom: '2rem' }}>
                                    We implement Infrastructure as Code (IaC) architectures coupled with aggressive FinOps practices.
                                </p>

                                <div className="glass-card" style={{ background: 'var(--color-off-white)', border: 'none', marginBottom: '3rem', padding: '2.5rem' }}>
                                    <h4 style={{ color: 'var(--color-warm-coral)', marginBottom: '1.5rem' }}>Engineering Resilience</h4>
                                    <ul className="job-list">
                                        <li><strong>Terraform Automation:</strong> Designing repeatable, version-controlled cloud environments that can be spun up or down instantly.</li>
                                        <li><strong>Spot Instance Engineering:</strong> Architecting workloads on Kubernetes to tolerate interruptions, letting clients utilize 80% cheaper compute resources.</li>
                                        <li><strong>Security Topologies:</strong> Implementing rigorous VPC segmentation, zero-trust rules, and IAM least-privilege principles.</li>
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

export default CloudInfrastructure;
