import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="not-found-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            <main style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                textAlign: 'center',
                padding: 'var(--spacing-3xl) var(--spacing-md)'
            }}>
                <h1 style={{ 
                    fontSize: '8rem', 
                    color: 'var(--color-deep-teal)', 
                    fontWeight: 300,
                    lineHeight: 1,
                    marginBottom: 'var(--spacing-md)'
                }}>
                    404
                </h1>
                <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>Page not found.</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-xl)', maxWidth: '400px' }}>
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="btn btn-primary">
                    Back to Home &rarr;
                </Link>
            </main>

            <Footer />
        </div>
    );
};

export default NotFound;
