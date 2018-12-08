import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';  // using react-route v4
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../ui/NotFound';
import Dashboard from '../ui/Dashboard';
import Login from '../ui/Login';
import Signup from '../ui/Signup';

export const history = createHistory();

export const routes = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact={true} path="/" component={Login} /> 
      <PublicRoute exact={true} path="/signup" component={Signup} /> 
      <PrivateRoute exact={true} path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/dashboard/:id" component={Dashboard} /> 
      <Route path="*" component={NotFound} /> 
    </Switch>
  </Router>
);
