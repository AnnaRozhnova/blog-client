import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';


class CreatePost extends React.Component {
    render() {
        return (
            <Fragment>
                <div class="title">СОЗДАТЬ ПОСТ</div>
                <div>
                
                 <form class="form" action="https://jsonplaceholder.typicode.com/posts" method="post">
                     <input type="text" name="title" placeholder='Заголовок' />
                <textarea placeholder='Текст'></textarea>
                <button>ОТПРАВИТЬ</button>
            </form>
            </div>
            </Fragment>
            
           
        );
    }
}

export default CreatePost;