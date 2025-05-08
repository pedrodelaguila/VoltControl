import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login/Login.jsx";
import HomeNotLoggedIn from "./pages/HomeNotLoggedIn/HomeNotLoggedIn.jsx";
import HomeLoggedIn from "./pages/HomeLoggedIn/HomeLoggedIn.jsx";
import Signup from "./pages/Signup/Signup.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        const onStorageChange = () => setIsLoggedIn(!!localStorage.getItem('token'));
        window.addEventListener('storage', onStorageChange);
        return () => window.removeEventListener('storage', onStorageChange);
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLoggedIn ? <HomeLoggedIn setIsLoggedIn={setIsLoggedIn} /> : <HomeNotLoggedIn />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
        </Router>
    );
}

export default App;
