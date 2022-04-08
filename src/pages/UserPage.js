import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Post from '../components/Post';
import Profile from '../components/Profile';
import sendRequest from '../utils';

const UserPage = () => {

    const {id} = useParams();
    const [posts, setPosts] = useState(null);
    useEffect(() => sendRequest('https://jsonplaceholder.typicode.com/posts').then(data => setPosts(data)), [id]);
    let postItems;
    if (posts) {
        postItems = posts.map(item => <div><Post title={item.title} body={item.body} /></div>)
    }
    return (
        <Fragment>
            <Profile />
            {postItems && postItems}
        </Fragment>
        
    );
}


export default UserPage;