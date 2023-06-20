import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/Service'>Our Services</Link>
            <Link to='/Contact'>Contact Us</Link>
            <Link to='/Visit'>Visit Our Factory</Link>
            <Link to='/DarkMode'>Dark Mode</Link>
            <Link to='/Links'>Links</Link>
            <Link to='/About'>About Us</Link>
        </div>
    );
};

export default Header;