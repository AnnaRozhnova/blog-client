
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
import sendRequest, { SIGN_OUT_URL } from '../utils';
import Swal from 'sweetalert2';
import Header from './Header';
class AppRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: document.cookie.slice(0, document.cookie.indexOf("="))}
    }

    updateUsername = (u) => {
        this.setState({username: u})
    }

    render() {
        return (
            <BrowserRouter>
                 
                 <Header username={this.state.username} updateUsername={this.updateUsername} />
                
                <div class="content">
                <Routes>
                    <Route path='posts' element={<Posts />} />  
                    <Route path='users' element={<Users />} />
                    <Route path='create-post' element={<CreatePost username={this.state.username} />} />
                    <Route path='post/:id' element={<PostPage key="myKey" />} />
                    <Route path='sign-in' element={<SignIn updateUsername={this.updateUsername} />} />
                    <Route path='sign-up' element={<SignUp updateUsername={this.updateUsername} />} />
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

