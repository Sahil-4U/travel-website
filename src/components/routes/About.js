import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../Hero';
import Footer from '../Footer';
import Aboutus from '../Aboutus';


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
            <Aboutus
                heading="A Journey in the Making: Mushafir' s Story"
                Text=" Mushafir's story is one of wanderlust and wonder. It started with a simple dream—to connect travelers with the world. Since our inception, we've been on a mission to inspire, guide, and celebrate the global community of adventurers. Our journey is your journey, and together, we'll keep exploring, one destination at a time."
            />
            <Aboutus
                heading='Our Mission'
                Text="Embark on a journey of discovery and wanderlust with Mushafir, where your travel dreams come to life. We are your trusted companion for all things travel, whether you' re a seasoned explorer or a first-time adventurer.At Mushafir, we believe that travel is not just about reaching a destination; it's about the experiences, the stories, and the memories you create along the way. Our platform is designed to inspire, guide, and connect you with the world's most breathtaking destinations, cultural treasures, and hidden gems."
            />
            <Footer />
        </div>
    )
}

export default About