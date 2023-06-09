import React from 'react';

const NavItem = (item) => {
    console.log(item.item.Name);
    return (
    <li className=''>
           <a className='text-white text-decoration-none mx-3 fw-bold ' href={item.item.id}> {item.item.Name}</a>
    </li>
    );
};

export default NavItem;