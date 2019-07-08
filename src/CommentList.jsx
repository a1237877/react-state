import React, { Component } from 'react';
class CommentInput extends Component {
  state = {  }
  render() { 
    const {commentLists} = this.props
    return (
      <div>
        {
          commentLists.map((comment,i)=>{
            return (
              <li key={i}>
                用户名:{comment.userName}
                内容:{comment.commentContent}
              </li>
            )
          })
        }
      </div>
    );
  }
}
 
export default CommentInput;
