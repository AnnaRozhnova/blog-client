import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { SIGN_UP_URL, fieldError, error } from '../utils';


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {error: false, textError: "Ошибка!"}
    }
    
    handleForm = async (e) => {
        e.preventDefault();
        var form = document.getElementById('myForm');
        var formData = new FormData(form);
        var objData = Object.fromEntries(formData)
        
        if (!objData["username"] || !objData["name"] || !objData["password"]) {
            fieldError()    
        } else {
            var jsonData = JSON.stringify(objData)
            let response = await fetch(SIGN_UP_URL, {
                method: 'POST', 
                credentials: 'include',
                body: jsonData,
            })

            if (response.status == 200 ) {
                this.props.updateUsername(objData["username"])
            } else {
                error()
            }   
        }
    }

    render() {
        return (
            <Fragment>
                
                <div class="title">РЕГИСТРАЦИЯ</div>
                
            <div class="signup">
                <form id="myForm" onClick={this.errorToFalse}>
                { this.state.error && <div>{this.state.textError}</div> }
               <input class="email" type="text" name="username" placeholder="Username" />
               <input class="name-input" type="text" name="name" placeholder="Название блога" />
                <input class="password" type="password" name="password" placeholder="Пароль" />
                <button onClick={this.handleForm}><Link to="/">ОТПРАВИТЬ</Link></button>
                
            </form>
            </div>
            </Fragment>
            
            
        )
    }
}

export default SignUp;