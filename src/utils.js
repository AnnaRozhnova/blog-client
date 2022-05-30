 
  export const SIGN_UP_URL = "https://rozhnova-blog.herokuapp.com/auth/sign-up"
  export const SIGN_IN_URL = "https://rozhnova-blog.herokuapp.com/auth/sign-in"
  export const SIGN_OUT_URL = "https://rozhnova-blog.herokuapp.com/auth/sign-out"

 
  export const GET_USER_POSTS_URL = "https://rozhnova-blog.herokuapp.com/posts/:username"
  export const CREATE_POST_URL = "https://rozhnova-blog.herokuapp.com/posts/create"
  export const GET_POSTS_URL = "https://rozhnova-blog.herokuapp.com/posts/"
  export const GET_POST_URL = "https://rozhnova-blog.herokuapp.com/posts/post/"


  export const CREATE_COMMENT_URL = "https://rozhnova-blog.herokuapp.com/comments/create"
  export const GET_COMMENTS_URL = "https://rozhnova-blog.herokuapp.com/comments/"
  //"proxy": "http://localhost:8000",


 function kitcut(text, limit) {
    text = text.trim();
    if( text.length <= limit) return text;
  
    text = text.slice(0, limit);
    var lastIndex = text.lastIndexOf(" ");
    return text.substring(0, lastIndex).trim() + "...";
  }
  
  async function sendRequest(url) {
    let data = await fetch(url).then(response => response.json());
    return data
  }


export default sendRequest;
  export { kitcut };