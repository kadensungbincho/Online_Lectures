import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="www.git.com">Kaden Cho</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to ="/welcome/kadencho">Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to ="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {isUserLoggedIn
                            ? <li className="nav-link"><Link className="nav-link" to ="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>
                            : <li className="nav-link"><Link className="nav-link" to ="/login">Login</Link></li>
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)