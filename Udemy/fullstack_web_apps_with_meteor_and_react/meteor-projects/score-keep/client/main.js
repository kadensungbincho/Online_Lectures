import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import App from './../imports/ui/App'

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find( {}, {sort: {score: -1}} ).fetch();
    let title = 'Real Score Keep';
    ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
  });
});
