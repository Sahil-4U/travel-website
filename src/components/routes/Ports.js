import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Singup from './Singup';
import Login from './Login';

function Ports() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/singup' element={<Singup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default Ports;