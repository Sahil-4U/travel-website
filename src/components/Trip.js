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
                    cardHeading={props.cardoneH}
                    imgsrc={props.cardoneI}
                    cardText={props.cardoneT}
                />
                <TripCard
                    cardHeading={props.cardtwoH}
                    imgsrc={props.cardtwoI}
                    cardText={props.cardtwoT}
                />
                <TripCard
                    cardHeading={props.cardthreeH}
                    imgsrc={props.cardthreeI}
                    cardText={props.cardthreeT}
                />
            </div>
        </div>
    )
}

export default Trip