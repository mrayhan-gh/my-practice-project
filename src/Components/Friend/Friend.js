import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';
const Friend = ({friend}) => {
    const {id, name, username, email} = friend;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/friend/${friend.id}`)
       console.log("Hello world!");
    }
    return (
        <div className='friend'>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <p>{username}</p>
            <p>{email}</p>
            <Link to={`/friend/${friend.id}`}>Click</Link>
            <button>
            <Link to={`/friend/${friend.id}`}>Click</Link>
            </button>
            <button onClick={handleClick}>Another</button>
            
        </div>
    );
};

export default Friend;