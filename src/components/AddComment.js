import React from 'react';

class AddComment extends React.Component {

    render() {
        return (
            <div class="add-comment">
                <form method="post">
                    <textarea placeholder="Ваш комметнарий"></textarea>
                    <button>Добавить</button>
                </form>    
            </div>
        );
    }
}
export default AddComment;