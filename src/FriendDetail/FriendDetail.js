import React from 'react';
import './FriendDetail.css';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friendData = useLoaderData();
    console.log(friendData);
    const { id, name, username, email, website, phone } = friendData;
    return (
        <div className='friend-detail'>
            <h2>Id: {id}</h2>
            <h1>Name: {name}</h1>
            <p>Username: {username}</p>
            <p>Email:{email}</p>
            <p>Phone: {phone} </p>
            <p>Website: {website} </p>
            <p>Address: </p>
        </div>
    );
};

export default FriendDetail;