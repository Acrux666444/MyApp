import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component{
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
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);

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
                <h1>Login</h1>
                <div className = "container">
                    {this.state.hasLoginFailed && <div className = "alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Succesful</div>}
                    User Name: <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleLoginChange}/>
                    Password: <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleLoginChange}/>
                    <button className = "btn btn-success" onClick = {this.showAll}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent