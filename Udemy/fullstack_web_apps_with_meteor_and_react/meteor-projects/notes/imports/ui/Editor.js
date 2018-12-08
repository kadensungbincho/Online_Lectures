import PropTypes from 'prop-types';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import { Notes } from '../api/notes';

export class Editor extends React.Component {
  constructor(props) {
    super(props);
    if (process.env.NODE_ENV==='test') {
      import testHistory from '../routes/testHistory';
      const history = testHistory;
    } else {
      import history from '../routes/AppRouter';
    }
    this.state = {
      title: '',
      body: ''
    };
  }
  handleTitleChange(e) {
    const title = e.target.value;
    this.setState(({ title }));
    this.props.call('notes.update', this.props.note._id, { title });
  }
  handleBodyChange(e) {
    const body = e.target.value;
    this.setState(({ body }));
    this.props.call('notes.update', this.props.note._id, { body });
  }
  componentDidUpdate(prevProps, prevState) {
    const currentNoteId = this.props.note ? this.props.note._id : undefined;
    const prevNoteId = prevProps.note ? prevProps.note._id : undefined;

    if (currentNoteId && currentNoteId !== prevNoteId) {
      this.setState({
        title: this.props.note.title,
        body: this.props.note.body
      });
    }
  }
  handleRemoval() {
    this.props.call('notes.remove', this.props.note._id);
    if (process.env.NODE_ENV === 'test') {
      this.props.history.push('/dashboard');
    } else {
      const protoHistory = history.__proto__;
      protoHistory.pushState.call(history, null, null, '/dashboard');
      Session.set('selectedNoteId', undefined);
    }
  }
  render() {
    if (this.props.note) {
      return (
        <div>
          <input value={this.state.title} placeholder="Your note title" onChange={this.handleTitleChange.bind(this)}/>
          <textarea value={this.state.body} placeholder="Your note here" onChange={this.handleBodyChange.bind(this)}></textarea>
          <button onClick={this.handleRemoval.bind(this)}>Delete Note</button>
        </div>
      );
    } else {
      return (
        <p>
          { this.props.selectedNoteId ? 'Note not found.' : 'Pick or create a note to get started.' }
        </p>
      );
    }
  };
};

Notes.propTypes = {
  note: PropTypes.object,
  selectedNoteId: PropTypes.string,
  call: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  return {
    selectedNoteId,
    note: Notes.findOne(selectedNoteId),
    call: Meteor.call,
    history
  };
}, Editor);