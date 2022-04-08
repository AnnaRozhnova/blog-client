import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import sendRequest from '../utils';
import Comment from '../components/Comment';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import Profile from '../components/Profile';
import AddComment from '../components/AddComment';

//import { useParams } from 'react-router-dom';

const PostPage = () => {
        const {id} = useParams();

        const [comments, setComments] = useState(null);
        const [post, setPost] = useState(null);
        useEffect(() => {
            sendRequest(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(data => setComments(data));
            sendRequest(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data => setPost(data));        
        }, [id]);

        let commentItems;
        if (comments) {
            commentItems = comments.map(item => <Comment email={item.email} body={item.body} />);
        }
        
        
        return (
            <Fragment>
                
                <Profile />
                {post && <div><Post title={post.title} body={post.body} /></div>}

                <div class="comments-title">Комментарии:</div>

                <AddComment />
                
                {comments && commentItems}
                
                

            </Fragment>
        );
    
}

export default PostPage;