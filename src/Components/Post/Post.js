import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;

    const navegate = useNavigate();
    const handleNavigate = () => {
        navegate(`/PostDetail/${id}`)
    }
    return (
        <div className='post'>
            <h3>{title}</h3>
            <p>
                {body}
            </p>
            <Link to={`/PostDetail/${id}`}>Click</Link>
            <button><Link to={`/PostDetail/${id}`}>Show Details</Link></button>
            <button onClick={handleNavigate} >Show Details2</button>
        </div>
    );
};

export default Post;