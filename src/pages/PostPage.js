import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import sendRequest, { GET_POST_URL } from '../utils';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import Profile from '../components/Profile';
import CommentList from '../components/CommentList';





const PostPage = () => {
        const {id} = useParams();
        const [post, setPost] = useState(null);

        
        useEffect(() => {

            sendRequest(`${GET_POST_URL}${id}`).then(data => {
                console.log("FFFFFFFFFFFFFFFFFFFFFF") 
                console.log(data) 
                setPost(data)
            })
            
            console.log(post)    
        }, [id]);
        

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