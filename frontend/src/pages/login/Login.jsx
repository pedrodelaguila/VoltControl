// src/pages/login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Leaf } from 'lucide-react';
import Logo from '../../components/logo/Logo.jsx';
import './Login.css';
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const { data } = await axios.post('http://localhost:3000/api/login', formData);

            if (data.token) {
                // 1) Save token in localStorage
                localStorage.setItem('token', data.token);
                // 2) Save user info in localStorage
                localStorage.setItem('userId', data.user.id);
                localStorage.setItem('username', `${data.user.name} ${data.user.surname}`);
                localStorage.setItem('email', data.user.email);
                // 3) Update login state and redirect
                setIsLoggedIn(true);
                navigate('/', { replace: true });
            } else {
                setError('Token not received from server');
            }
        } catch (err) {
            if (err.response?.status === 401) {
                setError('Invalid credentials');
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-logo-container"><Logo /></div>
            <div className="content-wrapper">
                <div className="login-content">
                    <div className="login-header">
                        <h2>Welcome Back</h2>
                        <p>Log in to monitor your energy savings</p>
                    </div>

                    {error && <div className="error-box">{error}</div>}

                    <form className="login-form" onSubmit={handleSubmit}>
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
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="login-button">
                            Log In <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </p>
                    </div>
                </div>

                <div className="eco-benefits">
                    {[
                        'Monitor your carbon footprint',
                        'Access personalized energy reports',
                        'Stay connected with smart alerts'
                    ].map((txt, i) => (
                        <div key={i} className="eco-benefit-item">
                            <Leaf className="eco-icon" />
                            <p>{txt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Login;
