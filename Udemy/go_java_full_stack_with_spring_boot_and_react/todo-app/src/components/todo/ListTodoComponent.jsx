import React, { Component } from 'react'

import moment from 'moment'

import AuthenticationService from './AuthenticationService'
import TodoDataService from '../../api/todo/TodoDataService'

class ListTodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentDidMount() {
        this.refreshTodos()
    }

    refreshTodos() {
        TodoDataService.retrieveAllTodos(AuthenticationService.getLoggedInUserName())
        .then(response => {
            this.setState({
                todos: response.data
            })
        })
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({message: `Delete of Todo ${id} Successful`})
                this.refreshTodos()
            }
        )
    }

    addTodoClicked() {
        this.props.history.push('/todos/-1')
    }

    updateTodoClicked(id) {
        this.props.history.push(`/todos/${id}`)
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is completed?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodoComponent