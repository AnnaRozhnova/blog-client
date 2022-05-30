import React from 'react';
import { CREATE_COMMENT_URL } from '../utils';
import $ from 'jquery';



class AddComment extends React.Component {

    
    handleForm = async (e) => {
        e.preventDefault();
        var form = document.getElementById('myForm');
        var formData = new FormData(form);
        var objData = Object.fromEntries(formData)
        objData.post_id = Number(objData.post_id)
        var jsonData = JSON.stringify(objData)

        

        let response = await fetch(CREATE_COMMENT_URL, {
                method: 'POST', 
                body: jsonData,
        })

        if (response.status == 200 ) {
            this.props.setComments(this.props.comments.unshift({username: "Ann", body: "UUU BBB"}))
            console.log(this.props.comments)
        }
        console.log(response)
        
    }


    render() {
        return (
            <div class="add-comment">
                <form id="myForm">
                    <textarea name="body" placeholder="Ваш комметнарий"></textarea>
                    <input type="number" name="post_id" value={this.props.id} />
                    <button onClick={this.handleForm}>Добавить</button>
                </form>    
            </div>
        );
    }
}
export default AddComment;