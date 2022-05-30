import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import sendRequest, { GET_POST_URL, GET_COMMENTS_URL, CREATE_COMMENT_URL } from '../utils';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import Profile from '../components/Profile';
import AddComment from '../components/AddComment';
import CommentList from '../components/CommentList';

//import { useParams } from 'react-router-dom';

const PostPage = () => {
        const {id} = useParams();

        const [comments, setComments] = useState(null);
        const [post, setPost] = useState(null);

        useEffect(() => {

            sendRequest(`${GET_COMMENTS_URL}${id}`).then(data => setComments(data));
            
            sendRequest(`${GET_POST_URL}${id}`).then(data => setPost(data));        
        }, [id]);

        console.log(comments);
        
        /*
        <AddComment id={id} setComments={setComments} comments={comments} />

                {comments && <CommentList comments={comments} />}
        */
        

        return (
            <Fragment>
                
                <Profile />
                {post && <div><Post title={post.post.title} body={post.post.body} /></div>}

                <div class="comments-title">Комментарии:</div>
                
                
                
                
            </Fragment>
        );
    
}

export default PostPage;