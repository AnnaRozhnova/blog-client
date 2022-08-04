
import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import sendRequest, { error, fieldError, SIGN_IN_URL } from '../utils';



class SignIn extends React.Component {
    
    handleForm = (e) => {
        e.preventDefault();
        var form = document.getElementById('myForm');
        var formData = new FormData(form);
        var objData = Object.fromEntries(formData)
        var jsonData = JSON.stringify(objData)

        if (!objData["username"] || !objData["password"]) {
            fieldError()
              
        } else {
            sendRequest(SIGN_IN_URL, {
                method: 'POST', 
                credentials: 'include',
                body: jsonData,
            }).then(response => {
                if (response.username) {
                    this.props.updateUsername(objData["username"])
                } else {
                    error()
                }
            })
        }

            
            
        



          
    }

    render() {
        

        return (
            <Fragment id="fragment">
                <div class="title">ВХОД</div>
            <div class="signin">
                <form id="myForm" method="post" action={ SIGN_IN_URL }>
                <input class="email" type="text" name="username" placeholder='Username' />
                <input class="password" type="password" name="password" placeholder='Пароль' />
                <button onClick={this.handleForm}><Link to="/">ОТПРАВИТЬ</Link></button>
                <p class="create-account">Ещё нет аккаунта? <Link to="/sign-up"><u>Зарегистрируйтесь</u></Link></p>
            </form>
            
            </div>
            </Fragment>
            
            
        )
    }
}

export default SignIn;