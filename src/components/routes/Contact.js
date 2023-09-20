import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../Hero';
import Footer from '../Footer';
import ContactForm from '../ContactForm';


function Contact() {
    return (
        <div>
            <Navbar />
            <Hero
                cName='hero-mid'
                src='https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                title='Contact'
                btnClass='hide'
            />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact