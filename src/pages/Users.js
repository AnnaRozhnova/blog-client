import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import sendRequest, { GET_USERS_URL } from "../utils";
import { Link } from "react-router-dom";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }
    componentDidMount() {
        sendRequest(GET_USERS_URL).then(data => this.setState({data: data.reverse()}));

    }
    render() {
        let users = this.state.data.map(item => <div class="user"><Link to={`/users/${item.username}`}><div class="user-name">{item.name}</div> <div class="user-username"><u>{item.username}</u></div></Link></div>);

        return (
            <Fragment>
                <div class="name">БЛОГИ</div>
                {users}
            </Fragment>
            
        );
    }
}

export default Users;