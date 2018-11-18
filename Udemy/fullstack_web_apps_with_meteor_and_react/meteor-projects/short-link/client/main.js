import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from '../imports/routes/AppRouter';

// https://stackoverflow.com/questions/44507161/meteor-react-error-target-container-is-not-a-dom-element-after-fix

Meteor.startup(() => {
  ReactDOM.render(routes(), document.getElementById('app'));
});

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});