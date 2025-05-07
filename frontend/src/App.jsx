// App.jsx - Main entry point
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeNotLoggedIn from './pages/HomeNotLoggedIn/HomeNotLoggedIn';
import Signup from './pages/signup/Signup.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeNotLoggedIn />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;