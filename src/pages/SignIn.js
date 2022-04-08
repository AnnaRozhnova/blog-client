import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


class SignIn extends React.Component {
    render() {
        return (
            <Fragment>
                <div class="title">ВХОД</div>
            <div class="signin">
                <form action="URL">
                <input class="email" type="text" name="email" placeholder='Email' />
                <input class="password" type="password" name="password" placeholder='Пароль' />
                <button>ОТПРАВИТЬ</button>
                <p class="create-account">Ещё нет аккаунта? <Link to="/sign-up"><u>Зарегистрируйтесь</u></Link></p>
            </form>
            
            </div>
            </Fragment>
            
            
        )
    }
}

export default SignIn;