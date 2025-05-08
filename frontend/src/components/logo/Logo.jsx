import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom'; // <-- import Link
import './Logo.css';

const Logo = () => {
    return (
        <Link to="/" className="logo">
            <Leaf className="logo-icon" />
            <h1 id="title">VoltControl</h1>
        </Link>
    );
};

export default Logo;
