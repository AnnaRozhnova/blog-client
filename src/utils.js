import Swal from 'sweetalert2';


  export const SIGN_UP_URL = "http://localhost:8000/auth/sign-up"
  export const SIGN_IN_URL = "http://localhost:8000/auth/sign-in"
  export const SIGN_OUT_URL = "http://localhost:8000/auth/sign-out"

  export const GET_USER_POSTS_URL = "http://localhost:8000/posts/"
  export const CREATE_POST_URL = "http://localhost:8000/posts/create"
  export const GET_POSTS_URL = "http://localhost:8000/posts/"
  export const GET_POST_URL = "http://localhost:8000/posts/post/"

  export const CREATE_COMMENT_URL = "http://localhost:8000/comments/create"
  export const GET_COMMENTS_URL = "http://localhost:8000/comments/"

  export const GET_USERS_URL = "http://localhost:8000/users/"



/*
export const SIGN_UP_URL = "https://rozhnova-blog.herokuapp.com/auth/sign-up"
export const SIGN_IN_URL = "https://rozhnova-blog.herokuapp.com/auth/sign-in"
export const SIGN_OUT_URL = "https://rozhnova-blog.herokuapp.com/auth/sign-out"

export const GET_USER_POSTS_URL = "https://rozhnova-blog.herokuapp.com/posts/"
export const CREATE_POST_URL = "https://rozhnova-blog.herokuapp.com/posts/create"
export const GET_POSTS_URL = "https://rozhnova-blog.herokuapp.com/posts/"
export const GET_POST_URL = "https://rozhnova-blog.herokuapp.com/posts/post/"

export const CREATE_COMMENT_URL = "https://rozhnova-blog.herokuapp.com/comments/create"
export const GET_COMMENTS_URL = "https://rozhnova-blog.herokuapp.com/comments/"

export const GET_USERS_URL = "https://rozhnova-blog.herokuapp.com/users/"
*/

  function fieldError() {
    Swal.fire({  
      title: 'Ошибка!',  
      type: 'error',  
      text: 'Не все поля заполнены.', 
      color: '#1C1C1C',
      showConfirmButton: false,
      showCloseButton: true,
      closeButtonHtml: '<span  color=red>&#10006;</span>',
       
    }); 
  }

  function error() {
    Swal.fire({  
      title: 'Ошибка!',  
      type: 'error',  
      color: '#1C1C1C',
      showConfirmButton: false,
      showCloseButton: true,
      closeButtonHtml: '<span  color=red>&#10006;</span>',
       
    }); 
  }

 function kitcut(text, limit) {
    text = text.trim();
    if( text.length <= limit) return text;
  
    text = text.slice(0, limit);
    var lastIndex = text.lastIndexOf(" ");
    return text.substring(0, lastIndex).trim() + "...";
  }
  
  async function sendRequest(url, params) {
    let data = await fetch(url, params).then(response => response.json());
    return data
  }


export default sendRequest;
  export { kitcut, fieldError, error };