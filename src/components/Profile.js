import React from "react";
import sendRequest, { GET_USERS_URL } from '../utils';
import { Link } from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            cookie: document.cookie.slice(0, document.cookie.indexOf("="))
        };
        sendRequest(`${GET_USERS_URL}${this.props.username}`).then(data => this.setState({user: data}))
      }


    render() {
        return (
            <React.Fragment>
                <div class="username"><Link to={`/users/${this.state.user.username}`} ><u><b>{this.state.user.username}</b></u></Link></div>
                <div class="name"><Link to={`/users/${this.state.user.username}`} >{this.state.user.name}</Link></div>
                { this.state.user.username == this.state.cookie && <div class="create"><Link to={'/create-post'}>СОЗДАТЬ ПОСТ</Link></div> }
            </React.Fragment>
            
        )
    }
}

export default Profile;