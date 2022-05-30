import React from 'react'
import Comment from '../components/Comment'


class CommentList extends React.Component {

    
    render() {
        let commentItems = this.props.comments.map(item => <Comment username={item.username} body={item.body} />)
        return (
            { commentItems }
        )
    }
}

export default CommentList