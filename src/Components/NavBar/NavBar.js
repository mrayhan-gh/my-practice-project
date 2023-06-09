import './NavBar.css'
import  {React, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavItem from '../NavItem/NavItem'

const NavBar = (name) => {

    const [open, setOpen] = useState(false);

    const handleClick = (open) => {
        setOpen(open)
    }
   
    const navItems = [
        {
            id:1,
            Name: "Home",
        },
        {
            id:2,
            Name: "Services",
        },
        {
            id:3,
            Name: "Contact",
        },
        {
            id:4,
            Name: "Sign in",
        },
        {
            id:5,
            Name: "Gallary",
        },
        {
            id:6,
            Name: "About",
        }
]

    return (
        <nav className='d-flex bg-primary'>
             <div style={{width: 40, height: 24}} className='fw-bold text-white d-md-none ' onClick={() => handleClick(!open)} >
                {open ? <XMarkIcon className='h-100 w-100 mb-1'/> : <Bars3Icon className='h-100 w-100 mb-1'/> }
            </div>
            <ul className={`
                    nav-items
                     mb-0 py-1  w-100 d-md-flex justify-content-center align-items-center list-unstyled
                    ${open ? 'show' : 'hide'}`}>
                {
                    navItems.map(item => <NavItem key={item.id} item={item}></NavItem>)     
                }
           </ul>
        </nav>
    );
};  

export default NavBar;