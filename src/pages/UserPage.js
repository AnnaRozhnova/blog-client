import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Post from '../components/Post';
import Profile from '../components/Profile';
import sendRequest, { GET_USER_POSTS_URL, kitcut } from '../utils';
import { Link } from "react-router-dom";



class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: window.location.href.slice(window.location.href.indexOf("/users/")+6).replace("/", "")
        }
        sendRequest(`${GET_USER_POSTS_URL}${this.state.username}`).then(data => {
            data.posts.reverse()
            this.setState(data)
        })
    }


    
    render() {
        console.log(this.state.posts)
        return (
            <Fragment>
            <Profile username={this.state.username}/> 
            { this.state.posts && this.state.posts.map(item => <div><Link to={`/post/${item.id}`}><Post title={item.title} body={kitcut(item.body, 550)} username={item.username} /></Link></div>) }
        </Fragment>
        )
    }
}
/*
const UserPage = () => {

    const {id} = useParams();
    const [posts, setPosts] = useState(null);
    useEffect(() => sendRequest(`${GET_USER_POSTS_URL}${id}`).then(data => {
        data.posts.reverse()
        setPosts(data)
    }), [id]);
    
    let postItems;
    if (posts) {
        postItems = posts.posts.map(item => <div><Link to={`/post/${item.id}`}><Post title={item.title} body={item.body} username={item.username} /></Link></div>)
    }
    
    return (
        <Fragment>
            { posts && <Profile username={posts.posts[0].username}/> }
            { postItems && postItems }
        </Fragment>
        
    );
}

*/

export default UserPage;