import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { CREATE_POST_URL } from '../utils';


class CreatePost extends React.Component {
    render() {
        return (
            <Fragment>
                <div class="title">СОЗДАТЬ ПОСТ</div>
                <div>
                
                 <form class="form" action={ CREATE_POST_URL } method="post">
                     <input type="text" name="title" placeholder='Заголовок' />
                <textarea name="body" placeholder='Текст'></textarea>
                <button>ОТПРАВИТЬ</button>
            </form>
            </div>
            </Fragment>
            
           
        );
    }
}

export default CreatePost;