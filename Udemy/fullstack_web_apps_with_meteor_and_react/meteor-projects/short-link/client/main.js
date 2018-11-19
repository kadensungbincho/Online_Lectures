import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from '../imports/routes/AppRouter';


// https://stackoverflow.com/questions/44507161/meteor-react-error-target-container-is-not-a-dom-element-after-fix

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});


Meteor.startup(() => {
  // Meteor.call('greetUser', (err, res) => {
  //   console.log('Greet User Arguments', err, res);
  // });
  Meteor.call('addNumbers', 1, 2, (err, res) => {
    console.log('addNumbers Arguments', err, res);
  });
  ReactDOM.render(routes(), document.getElementById('app'));
});
