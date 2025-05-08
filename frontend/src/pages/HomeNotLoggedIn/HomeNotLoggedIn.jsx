import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Users, LogIn, Home, Leaf } from 'lucide-react';
import './HomeNotLoggedIn.css';
import Logo from '../../components/logo/Logo.jsx';
const HomeNotLoggedIn = () => {
    const navigate = useNavigate();

    // Function to navigate to signup page
    const handleNavigateToSignup = () => {
        navigate('/signup');
    };
    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="home-container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <Logo />
                <div className="nav-buttons">
                    <button className="btn btn-login" onClick={handleNavigateToLogin}>
                        <LogIn size={18} />
                        <span>Login</span>
                    </button>
                    <button className="btn btn-signup" onClick={handleNavigateToSignup}>Sign Up</button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Monitor Your Energy Use,<br />Save the Planet</h1>
                    <p>Track your electricity consumption, reduce your carbon footprint, and contribute to a sustainable future.</p>
                    <button className="btn btn-cta" onClick={handleNavigateToSignup}>
                        <BarChart3 size={20} />
                        <span>Start Measuring Your Consumption</span>
                    </button>
                </div>
                <div className="hero-image">
                    {/* Using placeholder instead of empty string */}
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>Why Choose VoltControl?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <BarChart3 size={32} />
                        </div>
                        <h3>Real-Time Monitoring</h3>
                        <p>Track your electricity usage in real-time and discover patterns to optimize your consumption.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Leaf size={32} />
                        </div>
                        <h3>Environmental Impact</h3>
                        <p>See the direct environmental impact of your energy-saving efforts converted into meaningful metrics.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Home size={32} />
                        </div>
                        <h3>Smart Home Integration</h3>
                        <p>Connect with your smart home devices to automate energy savings throughout your house.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Users size={32} />
                        </div>
                        <h3>Community Challenges</h3>
                        <p>Join energy-saving challenges and compete with friends and neighbors for a greener planet.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>"Since using VoltControl, I've reduced my electricity bill by 30% and feel great about lowering my carbon footprint!"</p>
                        <div className="testimonial-author">
                            <span>Sarah K.</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>"The real-time monitoring helped our family become more conscious of our energy usage. It's like a game now to see how low we can go!"</p>
                        <div className="testimonial-author">
                            <span>Michael T.</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>"As a small business owner, VoltControl has helped me track and reduce operational costs while showcasing our commitment to sustainability."</p>
                        <div className="testimonial-author">
                            <span>Elena R.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-image">
                </div>
                <div className="cta-content">
                    <h2>Ready to Make a Difference?</h2>
                    <p>Join thousands of households taking control of their energy consumption and contributing to a healthier planet.</p>
                    <div className="cta-buttons">
                        <button className="btn btn-cta" onClick={handleNavigateToSignup}>Start Measuring Today</button>
                        <button className="btn btn-secondary">Learn More</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Leaf className="logo-icon" />
                        <span>VoltControl</span>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <ul>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Integrations</li>
                                <li>Case Studies</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Blog</li>
                                <li>Guides</li>
                                <li>Support Center</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Our Mission</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 VoltControl. All rights reserved.</p>
                    <div className="footer-legal">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomeNotLoggedIn;