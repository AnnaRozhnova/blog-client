
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
class AppRouter extends React.Component {
    /*
    constructor(props) {
        this.state = {username: ''}
    }
*/


    handleSignOut = (e) => {
        sendRequest(SIGN_OUT_URL, {
            method: 'POST', 
            credentials: 'include'
        }).then(data =>  {
            if (data.max_age == -1) {
                this.setState({username: ''})
                console.log(data)
                console.log(this.state)
                document.cookie = "session=*; expires=Tue, 19 Jan 2020 03:14:07 GMT"
            } else {
                Swal.fire({  
                    title: 'Ошибка!',  
                    type: 'error',  
                    text: 'Выход выполнен некорректно.', 
                    showCloseButton: true,
                    closeButtonHtml: '<span  color=red>&#10006;</span>',
                     
                  }); 
            }
            
        })
    }


    render() {
        return (
            <BrowserRouter>
                 <header>
                   <div><Link to="/posts">ПОСТЫ</Link></div>
                   <div><Link to="/users">БЛОГИ</Link></div>
                   <div class="login"><Link to="/sign-in">ВОЙТИ</Link></div>
                   <div class="login" onClick={this.handleSignOut}>ВЫЙТИ</div>
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

