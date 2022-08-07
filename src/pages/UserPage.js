
import { Fragment } from 'react/cjs/react.production.min';
import Post from '../components/Post';
import Profile from '../components/Profile';
import sendRequest, { GET_USER_POSTS_URL, kitcut } from '../utils';
import { Link } from "react-router-dom";



class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: window.location.href.slice(window.location.href.indexOf("/users/")+6).replace("/", "")
        }
        sendRequest(`${GET_USER_POSTS_URL}${this.state.username}`).then(data => {
            data.posts.reverse()
            this.setState(data)
        })
    }


    
    render() {
        console.log(this.state.posts)
        return (
            <Fragment>
            <Profile username={this.state.username}/> 
            { this.state.posts && this.state.posts.map(item => <div><Link to={`/post/${item.id}`}><Post title={item.title} body={kitcut(item.body, 550)} username={item.username} /></Link></div>) }
        </Fragment>
        )
    }
}


export default UserPage;