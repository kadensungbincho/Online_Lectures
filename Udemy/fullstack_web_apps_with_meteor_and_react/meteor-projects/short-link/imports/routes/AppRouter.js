import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';  // using react-route v4
import createHistory from 'history/createBrowserHistory';

import NotFound from '../ui/NotFound';
import Link from '../ui/Link';
import Login from '../ui/Login';
import Signup from '../ui/Signup';

export const history = createHistory();

export const routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} /> 
      <Route exact path="/links" component={Link} /> 
      <Route exact path="/signup" component={Signup} /> 
      <Route component={NotFound} /> 
    </Switch>
  </Router>
);