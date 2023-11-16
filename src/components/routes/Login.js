import React from 'react'
import { Link } from 'react-router-dom';
import './loginStyles.css';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';

function Login() {

    return (<>
        <Navbar />
        <div className='login-main'>


            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <input type="text" class="login-input" placeholder="Username" required />
                    <input type="password" class="login-input" placeholder="Password" required />
                    <button type="submit" class="login-button">Login</button>
                    <div className='btn'>
                        Login
                    </div>
                </form>
                <div className="signup-link">
                    Don't have an account? <Link to={'/singup'}>Singup</Link>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Login;