import React from "react";
import Post from "../components/Post.js";
import Profile from "../components/Profile";

import { kitcut, GET_POSTS_URL } from "../utils";
import sendRequest from "../utils";   
import { Link } from "react-router-dom";


   



   class Posts extends React.Component{
     constructor(props) {
     super(props);
     this.state = {data: []};
   }
    componentDidMount() {
          sendRequest(GET_POSTS_URL).then(data => {
            this.setState({data: data.reverse()})
            //console.log(this.state)
        })

    }
    render() {

      console.log(this.state)
      let posts = this.state.data.map(post => <div><Link to={`/post/${post.id}`}><Post title={post.title} body={kitcut(post.body, 150)} username={post.username} /></Link></div>)

      return(
        <React.Fragment>

            {posts}
            
        </React.Fragment>
      )
    }

   }


export default Posts;
