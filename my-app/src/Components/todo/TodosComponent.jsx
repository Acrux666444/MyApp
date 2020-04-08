import React, {Component} from 'react'

class TodosComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos :
            [
             {id: 1, description: 'Learn React', done: false, targerDate: new Date()},
             {id: 2, description: 'Learn React1', done: false, targerDate: new Date()},
             {id: 3, description: 'Learn React2', done: false, targerDate: new Date()},
             {id: 4, description: 'Learn React3', done: false, targerDate: new Date()},
            ]
        }
    }
    render(){
        return(
        <div>
            <h1>Todos List</h1>
            <div className = "container">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Is Completed</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.todos.map(
                            todo => 
                            <tr key = {todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targerDate.toString()}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
        )}
}

export default TodosComponent