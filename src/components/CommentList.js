import React, { useEffect, useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Comment from '../components/Comment'
import sendRequest from '../utils'
import { GET_COMMENTS_URL } from '../utils'
import AddComment from './AddComment'

/*
class CommentList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            commentItems: []
        }
        
        sendRequest(`${GET_COMMENTS_URL}${props.id}`).then(data => {
            data.reverse()
            this.setState({comments: data})
            let commentItems = this.state.comments.map(item => <Comment username={item.username} body={item.body} />)
            this.setState({commentItems: commentItems})
        })
        


    }
    


    addCommentItem = (e) => {
        //let comment = {username: data.username, body: data.body}
        //let comment = <Comment username={data.username} body={data.body} />
        let comment = <Comment username="EEEEEEEE" body="YYYYYYYYYY uuu NN mmmm" />
        let s = this.state.commentItems
        s.unshift(comment)
        this.setState({commentItems: s})
        console.log(this.state)
        console.log("addCommentItem")
        //this.forceUpdate()
    }
   
    
    render() {
        
        return (
            <Fragment>
                <AddComment id={this.props.id} addCommentItem={this.addCommentItem} />
                { this.state.commentItems }
            </Fragment>
            
        )
    }    
}
*/





const CommentList = (props) => {
    const id = props.id;
        
        const [comments, setComments] = useState([]);
        const [commentItems, setCommentItems] = useState([]);

        
        useEffect(() => {

            sendRequest(`${GET_COMMENTS_URL}${props.id}`).then(data => {
                data.reverse()
                setComments(data)  
            })
                  
        }, [id]);


        const addCommentItem = (data) => {
            let comment = {username: data.username, body: data.body}
            setComments([comment, ...comments])
        }




        return (
            <Fragment>
                <AddComment id={props.id} addCommentItem={addCommentItem} />
                { comments.map(item => <Comment username={item.username} body={item.body} />) }
            </Fragment>
        )
}




export default CommentList