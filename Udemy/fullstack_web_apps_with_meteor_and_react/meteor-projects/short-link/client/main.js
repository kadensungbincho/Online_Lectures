import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import { routes } from '../imports/routes/AppRouter';

// https://stackoverflow.com/questions/44507161/meteor-react-error-target-container-is-not-a-dom-element-after-fix

Meteor.startup(() => {
  ReactDOM.render(routes(), document.getElementById('app'));
});