import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';
import './singupStyles.css';
import { Link } from 'react-router-dom';

function Singup() {
    return (
        <>
            <Navbar />
            <div className='singup-container'>
                <h3 className='singup-heading-main'>
                    Sing Up
                </h3>
                <form>
                    <div className='singup-inputbox'>
                        <input type='text' placeholder='username' required />
                    </div>
                    <div className='singup-inputbox'>
                        <input type='email' placeholder='email' required />
                    </div>
                    <div className='singup-inputbox'>
                        <input type='password' placeholder='password' required />
                    </div>
                    <div className='singup-button'>
                        <button type='button'  >
                            Submit
                        </button>
                        <div className='btn'>
                            Submit
                        </div>
                    </div>

                    <div className='singup-login'>
                        <p>Have an account <span><Link to={'/login'}>login</Link></span></p>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Singup;