import React, { Fragment } from 'react';


class SignUp extends React.Component {
    render() {
        return (
            <Fragment>
                <div class="title">РЕГИСТРАЦИЯ</div>
            <div class="signup">
                <form action="URL">
               <input class="email" type="text" name="email" placeholder="Email" />
               <input class="username-input" type="text" name="username" placeholder="Username" />
               <input class="name-input" type="text" name="name" placeholder="Название блога" />
                <input class="password" type="password" name="password" placeholder="Пароль" />
                <button>ОТПРАВИТЬ</button>
                
            </form>
            </div>
            </Fragment>
            
            
        )
    }
}

export default SignUp;