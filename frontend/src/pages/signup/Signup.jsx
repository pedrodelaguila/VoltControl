import React, { useState } from 'react';
import { Leaf, User, Mail, Lock, ArrowRight } from 'lucide-react';
import Logo from '../../components/logo/Logo.jsx';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Send data to backend API (Express)
            const response = await axios.post('http://localhost:3000/api/signup', {
                name: formData.firstName,
                surname: formData.lastName,
                email: formData.email,
                password: formData.password
            });

            // On success, you can redirect or show a success message
            console.log('User registered:', response.data);
            window.location.href = '/login'; // You can modify the redirect path based on your needs
        } catch (error) {
            // Handle error
            if (error.response) {
                // If backend responds with an error
                setError(error.response.data.message);
            } else {
                // If there's a network or other issue
                setError('An error occurred while registering. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-logo-container">
                <Logo />
            </div>

            <div className="content-wrapper">
                <div className="signup-content">
                    <div className="signup-header">
                        <h2>Join VoltControl</h2>
                        <p>Monitor and optimize your home's energy consumption</p>
                    </div>

                    {/* Show error message if any */}
                    {error && <div className="error-message">{error}</div>}

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="firstName">First Name</label>
                            <div className="input-field">
                                <User size={18} className="input-icon" />
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="lastName">Last Name</label>
                            <div className="input-field">
                                <User size={18} className="input-icon" />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-field">
                                <Mail size={18} className="input-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-field">
                                <Lock size={18} className="input-icon" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="signup-button" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Get Started'}
                            <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="signup-footer">
                        <p>Already have an account? <a href="/login">Log In</a></p>
                    </div>
                </div>

                <div className="eco-benefits">
                    <div className="eco-benefit-item">
                        <Leaf className="eco-icon" />
                        <p>Save energy & reduce your carbon footprint</p>
                    </div>
                    <div className="eco-benefit-item">
                        <Leaf className="eco-icon" />
                        <p>Track real-time electricity usage</p>
                    </div>
                    <div className="eco-benefit-item">
                        <Leaf className="eco-icon" />
                        <p>Smart recommendations for efficient energy use</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
