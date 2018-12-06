import PropTypes from 'prop-types';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// NoteListHeader
export const NoteListHeader = (props) => {
  return (
    <div>
      <button onClick={() => {
        props.meteorCall('notes.insert');
      }}>Create Note</button>
    </div>
    );
};

NoteListHeader.propTypes = {
  meteorCall: PropTypes.func.isRequired
}

export default createContainer (() => {
  return {
    meteorCall: Meteor.call
  };
}, NoteListHeader);