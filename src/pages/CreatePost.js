import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { Fragment } from 'react/cjs/react.production.min';
import { CREATE_POST_URL, fieldError } from '../utils';
import sendRequest from '../utils';


class CreatePost extends React.Component {

    handleForm = (e) => {
        e.preventDefault();
        var form = document.getElementById('myForm');
        var formData = new FormData(form);
        var objData = Object.fromEntries(formData)
        objData.post_id = Number(objData.post_id)
        var jsonData = JSON.stringify(objData)

        if (!objData["title"] || !objData["body"]) {
            fieldError()
        } else {
            sendRequest(CREATE_POST_URL, {
                method: 'POST', 
                body: jsonData,
                credentials: 'include',
            }).then(data => window.location.reload())
            
        }


    }
    render() {
        return (
            <Fragment>
                <div class="title">СОЗДАТЬ ПОСТ</div>
                <div>
                
                 <form class="form" id="myForm">
                     <input type="text" name="title" placeholder='Заголовок' />
                    <textarea name="body" placeholder='Текст'></textarea>
                    <input type="text" name="username" hidden value={this.props.username} />
                    <button onClick={this.handleForm}><Link to={`/users/${this.props.username}`}>ОТПРАВИТЬ</Link></button>
                </form>
            </div>
            </Fragment>
            
           
        );
    }
}

export default CreatePost;