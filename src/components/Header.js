import React from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { SIGN_OUT_URL } from '../utils'


class Header extends React.Component {
    

    handleSignOut = async (e) => {
        await fetch(SIGN_OUT_URL, {
            method: 'GET', 
            credentials: 'include'
            /*
            headers: {
                Username: document.cookie.slice(0, document.cookie.indexOf("="))
              }    */
        })
        .then(response => response.json())
        .then(data =>  {
            if (data.max_age == -1) {
                this.props.updateUsername(null)
                //document.cookie = "session=*; expires=Tue, 19 Jan 2020 03:14:07 GMT"
            } else {
                Swal.fire({  
                    title: 'Ошибка!',  
                    type: 'error',  
                    text: 'Выход выполнен некорректно.', 
                    showCloseButton: true,
                    showConfirmButton: false,
                    closeButtonHtml: '<span  color=red>&#10006;</span>',
                     
                  }); 
            }
            
        })
    }





    render() {
        return (
            <header>
                   <div><Link to="/posts">ПОСТЫ</Link></div>
                   <div><Link to="/users">БЛОГИ</Link></div>
                   { !document.cookie && <div class="login"><Link to="/sign-in">ВОЙТИ</Link></div> }
                   { document.cookie && <div onClick={() => window.location.reload()}><Link to={`/users/${this.props.username}`}>МОЙ БЛОГ</Link></div> }
                   { document.cookie && <div class="login" onClick={this.handleSignOut}><Link to="/">ВЫЙТИ</Link></div> }
                </header>
        )
    }
}

export default Header