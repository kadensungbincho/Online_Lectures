import PropTypes from 'prop-types';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Notes } from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

export const NoteList = (props) => {
  return (
    <div>
      <NoteListHeader/>
      { props.notes.length === 0 ? <NoteListEmptyItem/> : undefined }
      {props.notes.map((note) => <NoteListItem key={note._id} note={note}/>)}
      NoteList { props.notes.length }
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('notes');

  return {
    notes: Notes.find().fetch()
  };
}, NoteList);