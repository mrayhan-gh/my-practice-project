import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/Friends'>Friends</NavLink>
            <NavLink  className={({isActive}) => isActive ? 'active' : undefined} to='/Service'>Our Services</NavLink>
            <NavLink to='/Contact'>Contact Us</NavLink>
            <NavLink to='/Visit'>Visit Our Factory</NavLink>
            <NavLink to='/DarkMode'>Dark Mode</NavLink>
            <NavLink to='/Links'>Links</NavLink>
            <NavLink to='/About'>About Us</NavLink>
            <NavLink to='/Posts'>Posts</NavLink>
        </div>
    );
};

export default Header;