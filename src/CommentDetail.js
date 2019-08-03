import React from 'react';
import ApprovalCard from './ApprovalCard';

const CommentDetail = props => {
    return (
      <ApprovalCard>
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={props.userAvatar}/>
          </a>
          <div className="content">
            <a href="/" className="author">
              {props.author}
            </a>
            <div className="metadata">
              <span className="date"> { props.timeAgo } </span>
            </div>
            <div className="text"> { props.userComments } </div>
          </div>
        </div>
      </ApprovalCard>
    );
};

export default CommentDetail;
