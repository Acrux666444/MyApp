import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggenIn()){
            console.log("autthentical check Route true");
            return <Route {...this.props}/>
        }else{
            console.log("autthentical check Route false");
            return <Redirect to = "/login"/>
        }
    }
}

export default AuthenticatedRoute