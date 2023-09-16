import React, { useState } from 'react';
import './navbarStyles.css';
import { Link, NavLink } from 'react-router-dom';
import MenuItems from './MenuItems';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='navbar-items'>
            <h1 className='navbar-logo'>Mushafir</h1>

            <div className='menu-icons'>

                <i className={toggle ? 'fas fa-times ' : 'fas fa-bars'} onClick={() => setToggle(p => !p)} ></i>

            </div>
            <ul className={toggle ? 'navbar-menu active' : 'navbar-menu '}>
                {
                    MenuItems.map((items) => (
                        <li key={items.title} >
                            <Link to={items.url} className={items.cName}>
                                <i className={items.icon}></i>
                                {items.title}
                            </Link>
                        </li>
                    ))
                }
                <button>
                    Sing up
                </button>
            </ul>
        </nav>
    )
}

export default Navbar