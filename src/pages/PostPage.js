import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import sendRequest, { GET_POST_URL, GET_COMMENTS_URL, CREATE_COMMENT_URL } from '../utils';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import Profile from '../components/Profile';
import AddComment from '../components/AddComment';
import CommentList from '../components/CommentList';
import Comment from '../components/Comment'

//window.location.href[window.location.href.length-1]
//window.location.href[window.location.href.indexOf("/post/")+6]
//window.location.href.slice(window.location.href.indexOf("/post/")+6)
//window.location.href.slice(window.location.href.indexOf("/post/")+6).replace("/", "")

/*
class PostPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: window.location.href.slice(window.location.href.indexOf("/post/")+6).replace("/", ""),
            post: ""
        }
        sendRequest(`${GET_POST_URL}${this.state.id}`).then(data => this.setState({post: data}))
    }
    //let id = window.location.href.slice(window.location.href.indexOf("/post/")+6).replace("/", "")
    render() {
        console.log("POST PAGE")
        return (
            <Fragment>
                <Profile />
                {this.state.post && <div><Post title={this.state.post.post.title} body={this.state.post.post.body} /></div>}
                <div class="comments-title">Комментарии:</div>

                <CommentList id={this.state.id} />
            </Fragment>
            
        )
    }
}
*/







const PostPage = () => {
        const {id} = useParams();
        //const [commentItems, setCommentItems] = useState(null);
        const [post, setPost] = useState(null);

        
        useEffect(() => {

            sendRequest(`${GET_POST_URL}${id}`).then(data => {
                console.log("FFFFFFFFFFFFFFFFFFFFFF") 
                console.log(data) 
                setPost(data)
            })
            
            console.log(post)    
        }, [id]);
        
/// {post && <Profile username={post.post.username} /> }

        return (
            <Fragment>
                
                {post && <Profile username={post.post.username} /> }
                {post && <div><Post title={post.post.title} body={post.post.body} username={post.post.username} /></div>}

                <div class="comments-title">Комментарии:</div>
                
                <CommentList id={id} />



            </Fragment>
        );
}

export default PostPage;