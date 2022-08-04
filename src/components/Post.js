import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
class Post extends React.Component {

    
   render() {
    
     return (
       <Fragment>
         <h3><u><Link to={`/users/${this.props.username}`}>{this.props.username}</Link></u></h3>
         <p class="post-title">{this.props.title}</p>

         <p>
          {this.props.body}
         </p>
        
      </Fragment>
     );
   }
   }

   export default Post;
