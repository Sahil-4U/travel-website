import React from 'react';
import './navbarStyles.css';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';

function Navbar() {
    return (
        <nav className='navbar-items'>
            <h1 className='navbar-logo'>Musafir</h1>
            <ul className='navbar-menu'>
                {
                    MenuItems.map((items) => (
                        <li key={items.title} className={items.cName}>
                            <Link to={items.url}>
                                <i className={items.icon}></i>
                                {items.title}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </nav>
    )
}

export default Navbar