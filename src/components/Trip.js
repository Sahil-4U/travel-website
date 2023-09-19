import React from 'react';
import './tripStyles.css';
import TripCard from './TripCard';

function Trip(props) {
    return (
        <div className='trip'>
            <h1>
                {props.mainHeading}
            </h1>
            <p>
                {props.mainText}
            </p>
            <div className='tripcards'>
                <TripCard
                    cardHeading='Trip In Jaipur'
                    cardText='dkksl;a;lskjf;alskdjfja;sldkjffsl;kddjjf;lsskdkdjfjfalkadkjf'
                />
                <TripCard
                    cardHeading='Trip In Jaipur'
                    cardText='dkksl;a;lskjf;alskdjfja;sldkjffsl;kddjjf;lsskdkdjfjfalkadkjf'
                />
                <TripCard
                    cardHeading='Trip In Jaipur'
                    cardText='dkksl;a;lskjf;alskdjfja;sldkjffsl;kddjjf;lsskdkdjfjfalkadkjf'
                />
            </div>
        </div>
    )
}

export default Trip