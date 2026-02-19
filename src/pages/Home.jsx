import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
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
            <Navbar />
            <Hero />
            <Trust />
            <Process />
            <Services />
            <WhySortNow />
            <Story />
            <Footer />
        </div>
    );
};

export default Home;
