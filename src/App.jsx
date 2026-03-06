import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ModernDataWarehousing from './pages/ModernDataWarehousing';
import AICustomerService from './pages/AICustomerService';
import ProductionMLSystems from './pages/ProductionMLSystems';
import MLOpsAutomation from './pages/MLOpsAutomation';
import CloudInfrastructure from './pages/CloudInfrastructure';
import TechnicalPartnership from './pages/TechnicalPartnership';
import './index.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Page transition wrapper
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3 } }
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Home />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Contact />
          </motion.div>
        } />
        <Route path="/services/modern-data-warehousing" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <ModernDataWarehousing />
          </motion.div>
        } />
        <Route path="/services/ai-customer-service" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <AICustomerService />
          </motion.div>
        } />
        <Route path="/services/production-ml-systems" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <ProductionMLSystems />
          </motion.div>
        } />
        <Route path="/services/mlops-automation" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <MLOpsAutomation />
          </motion.div>
        } />
        <Route path="/services/cloud-infrastructure" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <CloudInfrastructure />
          </motion.div>
        } />
        <Route path="/services/technical-partnership" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <TechnicalPartnership />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
