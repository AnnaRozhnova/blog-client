import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import sendRequest from "../utils";


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }
    componentDidMount() {
        sendRequest("https://jsonplaceholder.typicode.com/users").then(data => this.setState({data: data}));

    }
    render() {
        let users = this.state.data.map(item => <div class="user"><div class="user-name">{item.name}</div> <div class="user-username"><u>{item.username}</u></div></div>);

        return (
            <Fragment>
                <div class="name">БЛОГИ</div>
                {users}
            </Fragment>
            
        );
    }
}

export default Users;