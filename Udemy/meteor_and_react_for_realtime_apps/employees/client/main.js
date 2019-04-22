import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>Hello there!</div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('container'));
});