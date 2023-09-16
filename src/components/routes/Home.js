import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../Hero'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero
                cName='hero'
                src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                title='Your Journey Your Story'
                text='Choose Your Favourite Destination'
                btnName="Travel Plan"
                btnClass='show'
            />
        </div>
    )
}

export default Home