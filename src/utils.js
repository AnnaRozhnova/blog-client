import Swal from 'sweetalert2';

  const baseurl = 'https://' + 'rozhnova-blog.herokuapp.com'

  export const SIGN_UP_URL = baseurl + "/auth/sign-up"
  export const SIGN_IN_URL = baseurl + "/auth/sign-in"
  export const SIGN_OUT_URL = baseurl + "/auth/sign-out"

  export const GET_USER_POSTS_URL = baseurl + "/posts/"
  export const CREATE_POST_URL = baseurl + "/posts/create"
  export const GET_POSTS_URL = baseurl + "/posts/"
  export const GET_POST_URL = baseurl + "/posts/post/"

  export const CREATE_COMMENT_URL = baseurl + "/comments/create"
  export const GET_COMMENTS_URL = baseurl + "/comments/"

  export const GET_USERS_URL = baseurl + "/users/"





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