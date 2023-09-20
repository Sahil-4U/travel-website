import React from 'react';
import './aboutusStyles.css';

function Aboutus(props) {
    return (
        <div className='about-container'>
            <h1>{props.heading}</h1>
            <p>
                {props.Text}
            </p>
        </div>
    )
}

export default Aboutus