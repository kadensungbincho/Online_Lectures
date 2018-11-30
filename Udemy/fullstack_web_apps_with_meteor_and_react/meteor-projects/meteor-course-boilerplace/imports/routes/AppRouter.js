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

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  };
};

export const routes = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact={true} path="/" component={Login} /> 
      <PublicRoute exact={true} path="/signup" component={Signup} /> 
      <PrivateRoute path="/dashboard" component={Dashboard} /> 
      <Route path="*" component={NotFound} /> 
    </Switch>
  </Router>
);
