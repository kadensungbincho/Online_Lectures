import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './commentDetail';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));