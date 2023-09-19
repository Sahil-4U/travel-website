import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../Hero';
import Footer from '../Footer';


function Service() {
    return (
        <div>
            <Navbar />
            <Hero
                cName='hero-mid'
                src='https://images.unsplash.com/photo-1687952781085-4133ece5eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
                title='Services'
                btnClass='hide'
            />
            <Footer />
        </div>
    )
}

export default Service