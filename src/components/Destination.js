import React from 'react';
import './destinationStyles.css';

function Destination(props) {
    return (
        <div className='destination'>
            <h1>{props.mainHeading}</h1>
            <p>{props.mainText}</p>

            <div className={props.cName}>
                <div className='des-text'>
                    <h2>{props.nameOfDestination}</h2>
                    <p>
                        {props.descriptionOfDestination}
                    </p>
                </div>
                <div className='destination-image'>
                    <img src={props.image1src} alt={props.image1alt} />
                    <img src={props.image2src} alt={props.image2alt} />
                </div>
            </div>
        </div>
    )
}

export default Destination