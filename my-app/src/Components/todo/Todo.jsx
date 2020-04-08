import React, {Component} from 'react'
import { identifier } from '@babel/types';
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent'
import TodosComponent from './TodosComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'

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
                            <AuthenticatedRoute path = "/welcome/:name" component = {WelcomeComponent}/>
                            <AuthenticatedRoute path = "/todos" component = {TodosComponent}/>
                            <Route path = "/logout" component = {LogoutComponent}/>
                            <Route component = {ErrorComponent} />
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}