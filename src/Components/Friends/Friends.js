import React from 'react';
import './Friends.css'
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friendsData = useLoaderData();
    console.log(friendsData);
    return (
        <div className='friends'>
            {
                friendsData.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;