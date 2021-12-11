import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js';
import Arts from './pages/Arts/Arts.js';
import Pictures from './pages/Pictures/Pictures.js';

import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/arts' element={<Arts />} />
                <Route path='/pictures' element={<Pictures />} />
            </Routes>
        </Router>
    );
}

export default App;