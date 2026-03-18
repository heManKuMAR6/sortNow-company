import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ParticleBackground from '../components/ParticleBackground';
import Trust from '../components/Trust';
import Process from '../components/Process';
import Services from '../components/Services';
import WhySortNow from '../components/WhySortNow';
import Story from '../components/Story';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>sortNow & Company | Untangling Technical Chaos</title>
                <meta name="description" content="Premium AI, Data, and Cloud Engineering consulting. We build production-ready systems that work." />
            </Helmet>
            <Navbar />

            {/* Wrapper for shared Particle Background */}
            <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                <ParticleBackground />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Hero />
                    <WhySortNow />
                </div>
            </div>
            <Trust />
            <Process />
            <Services />
            <Story />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
