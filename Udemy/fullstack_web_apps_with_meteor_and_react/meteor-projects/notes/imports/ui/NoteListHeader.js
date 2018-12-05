import PropTypes from 'prop-types';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// NoteListHeader
export class NoteListHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick(e) {
    e.preventDefault();

    this.props.meteorCall
  };
  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>Create Note</button>
      </div>
      )
  }
};

export default createContainer (() => {
  return {
    meteorCall: Meteor.Call
  };
}, NoteListHeader);