import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../Hero';
import Footer from '../Footer';
import Trip from '../Trip';


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
            <Trip
                cardoneH='Golden Temple'
                cardoneI='https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80'
                cardoneT='The Golden temple is located in the holy city of the Sikhs, Amritsar. The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure.'
                cardtwoH='Prem Mandir,Mathura'
                cardtwoI='https://images.unsplash.com/photo-1514930228629-e8a7034abd17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80'
                cardtwoT='Prem Mandir is a Hindu temple in Vrindavan, Mathura, India. It is maintained by Jagadguru Kripalu Parishat, an international non-profit, educational, spiritual, charitable trust. The complex is on a 54-acre site on the outskirts of Vrindavan, and is dedicated to Lord Radha Krishna and Sita Ram.'
                cardthreeH='Kedarnath Mandir'
                cardthreeI='https://media.istockphoto.com/id/1170875709/photo/holy-hindu-temple-of-lord-shri-kedarnath-shankar-bholenath-temple-2019-view-in-chamoli.jpg?s=2048x2048&w=is&k=20&c=yf_MCOmAaPzYs9C3dZLSgHM8BIMP_fl9NjRdL5pukjA='
                cardthreeT='This magnificent temple is ancient and constructed over a thousand years ago by Jagad Guru Adi Shankaracharya. It is located in the Rudra Himalaya range of Uttarakhand State. It is situated at an altitude of 3,581 mt & it is a 16 km trek from the nearest place of Gaurikund.'
            />
            <Footer />
        </div>
    )
}

export default Service