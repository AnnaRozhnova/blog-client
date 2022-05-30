import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Fragment } from 'react';

import Swal from 'sweetalert2';
import { SIGN_UP_URL } from '../utils';

/*
onChangeInput(event) {         
    const { name } = event.currentTarget;         
    const { value } = event.currentTarget;         
    this.setState(state => ({ objectItems: { ...state.objectItems, [name]: value,          
        [`${name}IsValid`]: this.validate(value) } }), () => this.validateData());      
}

*/
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
            //this.setState({error: true, textError: "Ошибка! Проверьте, все ли поля заполнены"})
            console.log(objData["username"])
            
            Swal.fire({  
                title: 'Ошибка!',  
                type: 'error',  
                text: 'Проверьте, все ли поля заполнены.', 
                showCloseButton: true,
                closeButtonHtml: '<span  color=red>&#10006;</span>',
                 
              }); 
              
        } else {
            var jsonData = JSON.stringify(objData)
            console.log(jsonData)
            let response = await fetch(SIGN_UP_URL, {
                method: 'POST', 
                credentials: 'include',
                body: jsonData,
        })
        console.log(response)
        if (response.status == 200 ) {
            console.log("200")
        }
        }
    }
    errorToFalse = (e) => {
        this.setState({error: false, textError: "Ошибка!"})
    } 

    errorToTrue = () => {
        console.log("ERRRRRRR")
        this.setState({error: true, textError: "Ошибка! Проверьте, все ли поля заполнены"})
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
                <button onClick={this.handleForm}>ОТПРАВИТЬ</button>
                
            </form>
            </div>
            </Fragment>
            
            
        )
    }
}

export default SignUp;