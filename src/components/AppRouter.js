import React from 'react';
import {
    Route,
    BrowserRouter,
    Routes,
    Link
  } from "react-router-dom";
import CreatePost from '../pages/CreatePost';

import Posts from '../pages/Posts';
import Users from '../pages/Users';
import PostPage from '../pages/PostPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserPage from '../pages/UserPage';
class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                 <header>
                   <div><Link to="/posts">ПОСТЫ</Link></div>
                   <div><Link to="/users">БЛОГИ</Link></div>
                   <div class="login"><Link to="/sign-in">ВОЙТИ</Link></div>
                </header>
                <div class="content">
                <Routes>
                    <Route path='posts' element={<Posts />} />  
                    <Route path='users' element={<Users />} />
                    <Route path='create-post' element={<CreatePost />} />
                    <Route path='post/:id' element={<PostPage key="myKey" />} />
                    <Route path='sign-in' element={<SignIn />} />
                    <Route path='sign-up' element={<SignUp />} />
                    <Route path='users' element={<Users />} />
                    <Route path='users/:id' element={<UserPage key="userKey" />} />
                    <Route path="*" element={<Posts />} />
                </Routes>
                </div>
            </BrowserRouter>
            
        )
    }
}


export default AppRouter;

