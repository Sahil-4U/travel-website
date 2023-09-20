import React from 'react';
import './tripStyles.css';
import TripCard from './TripCard';

function Trip(props) {
    return (
        <div className='trip'>
            <h1>
                Recent Trips
            </h1>
            <p>
                You can discover unique destinations using Google Maps.
            </p>
            <div className='tripcards'>
                <TripCard
                    cardHeading='Trip In Jaipur'
                    imgsrc='https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                    cardText="It is Rajasthan' s most-populous city. A walled town surrounded (except to the south) by hills, the city was founded in 1727 by Maharaja Sawai Jai Singh to replace nearby Amber (now Amer, a part of Jaipur) as the capital of the princely state of Jaipur (founded by the Rajputs in the 12th century ce)."
                />
                <TripCard
                    cardHeading='Trip In Uttrakhand'
                    imgsrc='https://images.unsplash.com/photo-1596599623428-87dbae5e7816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    cardText='Untouched nature in all its splendour is what Uttarakhand offers visitors. The state has been blessed with gorgeous natural beauty. The fact that almost 45.43 per cent of its geographical area has a dense forest cover, makes it all the more remarkable.'
                />
                <TripCard
                    cardHeading='Trip In Ladakh'
                    imgsrc='https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    cardText='Ladakh is situated over 3,000 meters above the sea level and features, the highest bridge – Bailey Bridge over Suru and Dras rivers, the highest salt water lake – Pangong Tso, the highest farmed fields close to the Tso-Moriri lake at Korzok and the highest arena on earth at Siachen Glacier.'
                />
            </div>
        </div>
    )
}

export default Trip