import React from 'react';
import './contactformStyles.css';

function ContactForm() {
    return (
        <div className='form-container'>
            <h1>
                Send a message to us!
            </h1>
            <form>
                <input placeholder='Name' />
                <input placeholder='Email' />
                <input placeholder='Subject' />
                <textarea placeholder='message' rows={4} />
                <button type='button'>Send</button>
            </form>
        </div>
    )
}

export default ContactForm