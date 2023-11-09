import React from 'react';
import './tripStyles.css';

function TripCard(props) {
    return (
        <div className='t-card'>
            <div className='tc-img'>
                <img src={props.imgsrc} alt=''
                    loading='lazy'
                />
            </div>
            <h4>
                {props.cardHeading}
            </h4>
            <p>
                {props.cardText}
            </p>
        </div>
    )
}

export default TripCard;