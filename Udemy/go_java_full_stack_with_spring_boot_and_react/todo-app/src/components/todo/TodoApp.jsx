import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodoComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import TodoComponent from './TodoComponent'


class TodoApp extends Component {
    render() {
        return ( 
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                    <AuthenticatedRoute path="/" exact component={LoginComponent} />  
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                        <AuthenticatedRoute path="/todos" component={ListTodoComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>
                <FooterComponent />
            </div>
        )
    }
}

export default TodoApp;