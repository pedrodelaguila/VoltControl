// src/pages/home/HomeLoggedIn.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Zap } from 'lucide-react';
import Logo from '../../components/logo/Logo.jsx';
import './HomeLoggedIn.css';

const devicesInitial = [
    {
        id: 1,
        name: 'Heladera',
        description: 'La heladera mantiene los alimentos frescos y consume energía constantemente.',
        wattage: 0,
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046750.png', // icono ilustrativo
    },
    {
        id: 2,
        name: 'Estufa',
        description: 'La estufa eléctrica proporciona calor pero tiene un consumo elevado de energía.',
        wattage: 0,
        image: 'https://cdn-icons-png.flaticon.com/512/3050/3050366.png',
    },
    {
        id: 3,
        name: 'Microondas',
        description: 'El microondas calienta alimentos rápidamente, con un consumo moderado.',
        wattage: 0,
        image: 'https://cdn-icons-png.flaticon.com/512/3081/3081344.png',
    },
    {
        id: 4,
        name: 'Ventilador',
        description: 'El ventilador ayuda a mantener el aire fresco con bajo consumo de energía.',
        wattage: 0,
        image: 'https://cdn-icons-png.flaticon.com/512/2932/2932435.png',
    },
    {
        id: 5,
        name: 'Televisión',
        description: 'La televisión consume energía mientras está encendida, depende del tamaño y tipo.',
        wattage: 0,
        image: 'https://cdn-icons-png.flaticon.com/512/1086/1086933.png',
    },
    {
        id: 6,
        name: 'Luz',
        description: 'Las luces LED son eficientes, con bajo consumo energético.',
        wattage: 0,
        image: 'https://cdn-icons-png.flaticon.com/512/290/290113.png',
    },
];

const HomeLoggedIn = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: null,
        username: 'Usuario',
        email: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const [deviceStates, setDeviceStates] = useState(
        devicesInitial.reduce((acc, device) => {
            acc[device.id] = false; // todos apagados inicialmente
            return acc;
        }, {})
    );

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/', { replace: true });
            return;
        }
        const storedUserId = localStorage.getItem('userId');
        const storedUsername = localStorage.getItem('username');
        const storedEmail = localStorage.getItem('email');
        setUserData({
            id: storedUserId,
            username: storedUsername || 'Usuario',
            email: storedEmail || ''
        });
        setIsLoading(false);
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        setIsLoggedIn(false);
        navigate('/', { replace: true });
    };

    const toggleDevice = (id) => {
        setDeviceStates(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Cargando datos...</p>
            </div>
        );
    }

    return (
        <div className="home-logged-container">
            <header className="top-bar">
                <div className="logo-wrap">
                    <Logo />
                </div>
                <section className="user-section">
                    <User className="user-icon" />
                    <h2 className="username">{userData.username}</h2>
                </section>
                <button className="logout-button" onClick={handleLogout}>
                    Cerrar Sesión
                </button>
            </header>

            <div className="consumption-header">
                <h1 className="title">
                    Consumo Eléctrico de {userData.username}
                </h1>
            </div>

            <div className="devices-grid">
                {devicesInitial.map((device) => (
                    <div
                        key={device.id}
                        className={`device-card ${deviceStates[device.id] ? 'active' : 'inactive'}`}
                    >
                        <div className="device-header">
                            <h3 className="device-name">{device.name}</h3>
                            <span className={`device-status ${deviceStates[device.id] ? 'on' : 'off'}`}>
                                {deviceStates[device.id] ? 'Encendido' : 'Apagado'}
                            </span>
                        </div>
                        <div className="device-image-container">
                            <img src={device.image} alt={device.name} className="device-image" />
                        </div>
                        <p className="device-desc">{device.description}</p>
                        <div className="device-consumption">
                            <Zap className="device-zap-icon" />
                            <span className="device-consumption-value">{device.wattage} W</span>
                        </div>
                        <button
                            className={`device-toggle ${deviceStates[device.id] ? 'off' : 'on'}`}
                            onClick={() => toggleDevice(device.id)}
                        >
                            {deviceStates[device.id] ? 'Apagar' : 'Prender'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeLoggedIn;
