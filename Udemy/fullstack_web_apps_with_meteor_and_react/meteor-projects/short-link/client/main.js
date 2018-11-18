import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowseHistory';
import { Router, Route, Switch } from 'react-router-dom';  // using react-route v4

import NotFound from '../imports/ui/NotFound';
import Link from '../imports/ui/Link';
import Login from '../imports/ui/Login';
import Signup from '../imports/ui/Signup';

// https://stackoverflow.com/questions/44507161/meteor-react-error-target-container-is-not-a-dom-element-after-fix

// Create and import basic version of Login
// Create the route for "/" and render Login

const history = createHistory();

const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Login} /> 
        <Route exact path="/links" component={Link} /> 
        <Route exact path="/signup" component={Signup} /> 
        <Route path="*" component={NotFound} /> 
      </Switch>
    </div>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});