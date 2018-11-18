import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, history } from '../imports/routes/AppRouter';

// https://stackoverflow.com/questions/44507161/meteor-react-error-target-container-is-not-a-dom-element-after-fix

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

Meteor.startup(() => {
  ReactDOM.render(routes(), document.getElementById('app'));
});

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.push('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.push('/');
  };

  console.log('isAuthenticated', isAuthenticated);
});