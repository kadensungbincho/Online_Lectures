import React from 'react';

export default class Link extends React.Component {
  onLogout() {
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
};
