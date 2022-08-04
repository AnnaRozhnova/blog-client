import React from 'react';
import { CREATE_COMMENT_URL } from '../utils';
import sendRequest from '../utils';



class AddComment extends React.Component {

    
    handleForm = (e) => {
        e.preventDefault();
        var form = document.getElementById('myForm');
        var formData = new FormData(form);
        var objData = Object.fromEntries(formData)
        objData.post_id = Number(objData.post_id)
        var jsonData = JSON.stringify(objData)

        if (!objData["body"]) {
            return    
        } else {
            let res = sendRequest(CREATE_COMMENT_URL, {
                method: 'POST', 
                body: jsonData,
                credentials: 'include',
            })
        
            if (res) {
                form.reset()
                this.props.addCommentItem(objData)
            }
        }
        
    }


    render() {
        return (
            <div class="add-comment">
                <form id="myForm">
                    <textarea name="body" placeholder="Ваш комметнарий"></textarea>
                    <input type="number" name="post_id" hidden value={this.props.id} />
                    <input type="text" name="username" hidden value={document.cookie.slice(0, document.cookie.indexOf("="))} />
                    <button onClick={this.handleForm}>Добавить</button>
                </form>    

            </div>
        );
    }
}
export default AddComment;