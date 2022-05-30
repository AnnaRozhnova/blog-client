
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_URL } from '../utils';
import axios from 'axios';

class SignIn extends React.Component {
    
    handleForm = async (e) => {
        e.preventDefault();
        var form = document.getElementById('myForm');
        var formData = new FormData(form);
        var objData = Object.fromEntries(formData)
            var jsonData = JSON.stringify(objData)
            console.log(jsonData)
/*
            axios.post(SIGN_IN_URL, jsonData, {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
  */
            
            let response = await fetch(SIGN_IN_URL, {
                method: 'POST', 
                credentials: 'include',
                body: jsonData,
        })
        
        /*
        .then(resp => {
            setTimeout(resp, 5000)
            resp.json() 
        })
        */
        /*
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
              console.log("chrome.runtime.onMessage.addListener")

   
              return true
            });
            */
        console.log(response)

        console.log(document.cookie)
          
    }

    render() {
        /* 
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
              console.log(sender.tab ?
                          "from a content script:" + sender.tab.url :
                          "from the extension");
              if (request.greeting == "hello")
                sendResponse({farewell: "goodbye"});
            });
             */
        return (
            <Fragment>
                <div class="title">ВХОД</div>
            <div class="signin">
                <form id="myForm" method="post" action={ SIGN_IN_URL }>
                <input class="email" type="text" name="username" placeholder='Username' />
                <input class="password" type="password" name="password" placeholder='Пароль' />
                <button onClick={this.handleForm}>ОТПРАВИТЬ</button>
                <p class="create-account">Ещё нет аккаунта? <Link to="/sign-up"><u>Зарегистрируйтесь</u></Link></p>
            </form>
            
            </div>
            </Fragment>
            
            
        )
    }
}

export default SignIn;