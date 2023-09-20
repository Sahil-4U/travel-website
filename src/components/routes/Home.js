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
                title='Welcome to Mushafir - Your Gateway to Adventure!'
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
            <Trip cardoneH='Trip In Jaipur' cardoneI='https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                cardoneT="It is Rajasthan' s most-populous city.A walled town surrounded (except to the south) by hills, the city was founded in 1727 by Maharaja Sawai Jai Singh to replace nearby Amber (now Amer, a part of Jaipur) as the capital of the princely state of Jaipur (founded by the Rajputs in the 12th century ce)."
                cardtwoH='Trip In Uttrakhand'
                cardtwoI='https://images.unsplash.com/photo-1596599623428-87dbae5e7816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                cardtwoT='Untouched nature in all its splendour is what Uttarakhand offers visitors. The state has been blessed with gorgeous natural beauty. The fact that almost 45.43 per cent of its geographical area has a dense forest cover, makes it all the more remarkable.'

                cardthreeH='Trip In Ladakh'
                cardthreeI='https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                cardthreeT='Ladakh is situated over 3,000 meters above the sea level and features, the highest bridge – Bailey Bridge over Suru and Dras rivers, the highest salt water lake – Pangong Tso, the highest farmed fields close to the Tso-Moriri lake at Korzok and the highest arena on earth at Siachen Glacier.'
            />
            <Footer />
        </>
    )
}

export default Home