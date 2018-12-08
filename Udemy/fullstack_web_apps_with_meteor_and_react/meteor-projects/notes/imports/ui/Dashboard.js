import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor  from './Editor';
import { Session } from 'meteor/session';

export default ({ match }) => {
  if (match) {
    Session.set('selectedNoteId', match.params.id);
  }
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        <NoteList/>
        <Editor/>
      </div>
    </div>
  )
};
