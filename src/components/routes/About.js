import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../Hero';


function About() {
    return (
        <div>
            <Navbar />
            <Hero
                cName='hero-mid'
                src='https://plus.unsplash.com/premium_photo-1664299326174-f73b66496733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                title='About'
                btnClass='hide'
            />
        </div>
    )
}

export default About