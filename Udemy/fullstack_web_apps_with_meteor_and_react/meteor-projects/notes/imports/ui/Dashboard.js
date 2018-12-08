import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor  from './Editor';
import { Session } from 'meteor/session';

export default class Dashboard extends React.Component {
  componentWillMount() {
    if (this.props.match) {
      Session.set('selectedNoteId', this.props.match.params.id);
    }
  }
  componentWillUnmount() {
    Session.set('selectedNoteId', undefined);
  }
  render() {
    return (
      <div>
        <PrivateHeader title="Dashboard"/>
        <div className="page-content">
          <div className="page-content__sidebar">
            <NoteList/>
          </div>
          <div className="page-content__main">
            <Editor/>
          </div>
        </div>
      </div>
    );
  }
};
