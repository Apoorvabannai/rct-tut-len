import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import fakerData from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Apoorva" 
        timeAgo="At time 6:00 PM" 
        userComments="Apoorva Loves Rakesh" 
        userAvatar={fakerData.image.avatar()}
      />
      <CommentDetail 
        author="Rakesh" 
        timeAgo="At time 7:00 PM" 
        userComments="Rakesh Loves Apoora" 
        userAvatar={fakerData.image.avatar()}
      />
      <CommentDetail 
        author="ApoorvaRakesh" 
        timeAgo="At time 8:00 PM" 
        userComments="Rakesh & Apoorva May Be In Love" 
        userAvatar={fakerData.image.avatar()}
      />
    </div>
  );
}

ReactDOM.render (
  <App/>,
  document.querySelector('#root')
)