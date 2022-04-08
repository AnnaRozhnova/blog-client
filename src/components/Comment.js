import React from 'react';

class Comment extends React.Component {

    render() {
        return (
            <div class="comment">
                <h3>{ this.props.email }</h3>
                <p>{ this.props.body }</p>
            </div>
        );
    }
}

export default Comment;