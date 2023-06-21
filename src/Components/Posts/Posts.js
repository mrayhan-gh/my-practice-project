import React from 'react';
import './Posts.css'
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const Posts = useLoaderData();
    console.log(Posts);
    return (
        <div className='posts'>
            {
                Posts.map(post => <Post
                    key={post.id}
                    post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;