import React, {Component} from 'react'
import { identifier } from '@babel/types';
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

export default class Todo extends Component{
    render(){
        return(
            <div className = "Todo">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path = "/" exact component = {LoginComponent}/>
                            <Route path = "/login" component = {LoginComponent}/>
                            <Route path = "/welcome/:name" component = {WelcomeComponent}/>
                            <Route path = "/todos" component = {TodosComponent}/>
                            <Route component = {ErrorComponent} />
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render(){
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.in28minutes.com" className="navbar-brand">in28Minutes</a></div>
                    <ul className="navbar-nav">
                         <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                        <li><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return (
           <div>sd</div>
        )
    }
}

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
            <table>
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
                        <tr>
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
        
        )}
}

class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome {this.props.match.params.name}.
                You can manage your todos <Link to = "/todos">here</Link>
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>An Error Occured</div>
}

export class LoginComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: 'acrux',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.showAll = this.showAll.bind(this);
        
    }
    handleLoginChange(event){
        console.log(event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        });   
    }


    showAll(){
        if(this.state.username === "acrux" && this.state.password === "asdf"){
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({
                showSuccessMessage: true,
                hasLoginFailed: false
            })
            console.log("Welcome");  
        }else{
            this.setState({
                showSuccessMessage: false,
                hasLoginFailed: true
            })
            console.log("Not find username with this password"); 
        }
        console.log(this.state); 
    }

    render(){
        return(
            <div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Succesful</div>}
                User Name: <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleLoginChange}/>
                Password: <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleLoginChange}/>
                <button onClick = {this.showAll}>Login</button>
            </div>
        )
    }
}
function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null;
}
function ShowSucessCredentials(props){
    if(props.showSuccessMessage){
        return <div>Login Succesful</div>
    }
    return null;
}
