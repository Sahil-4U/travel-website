import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../Hero'
import Destination from '../Destination'
import Trip from '../Trip'
import Footer from '../Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero'
                src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                title='Your Journey Your Story'
                text='Choose Your Favourite Destination'
                btnName="Travel Plan"
                btnClass='show'
            />
            <Destination
                mainHeading='Popular Destinations'
                mainText='Tours give you the opportunity to see a  lot,within a time frame'
                cName='first-des'
                nameOfDestination='Manali Hills,Himachal'
                descriptionOfDestination='One of the most iconic view in Manali is hills , rivers and a layer of ice on mountains,
                        Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains. Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti.'
                image1src='https://images.unsplash.com/photo-1626621331169-5f34be280ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
                image1alt='mountain image'
                image2src='https://images.unsplash.com/photo-1590667046100-2e0fd9a5b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
                image2alt='valley image'
            />
            <Destination

                cName='first-des-reverse'
                nameOfDestination='Manali Hills,Himachal'
                descriptionOfDestination='One of the most iconic view in Manali is hills , rivers and a layer of ice on mountains,
                        Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains. Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes, and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti.'
                image1src='https://images.unsplash.com/photo-1626621331169-5f34be280ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
                image1alt='mountain image'
                image2src='https://images.unsplash.com/photo-1590667046100-2e0fd9a5b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
                image2alt='valley image'
            />
            <Trip
                mainHeading='Recent Trips'
                mainText='You can discover unique destinations using Google Maps.'
            />
            <Footer />
        </>
    )
}

export default Home