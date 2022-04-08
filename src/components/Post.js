import React from "react";
import { Fragment } from "react/cjs/react.production.min";
class Post extends React.Component {

   render() {

     return (
       <Fragment>
         <h3><u>username</u></h3>
         <p class="post-title">{this.props.title}</p>
         <p>
          {this.props.body}
         </p>
         <div class="date">1.02.2022</div>
      </Fragment>
     );
   }
   }

   export default Post;
