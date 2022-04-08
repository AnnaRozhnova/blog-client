import React from "react";
import Post from "../components/Post.js";
import Profile from "../components/Profile";

import { kitcut } from "../utils";
import sendRequest from "../utils";   
import { Link } from "react-router-dom";


   



   class Posts extends React.Component{
     constructor(props) {
     super(props);
     this.state = {data: []};
   }
    componentDidMount() {
          sendRequest('https://jsonplaceholder.typicode.com/posts').then(data => this.setState({data: data}))

    }
    render() {

      
      let posts = this.state.data.map(post => <div><Link to={`/post/${post.id}`}><Post title={post.title} body={kitcut(post.body, 150)}/></Link></div>)

      return(
        <React.Fragment>
        

            <Profile />


            {posts}
            
        </React.Fragment>
      )
    }

   }


export default Posts;
