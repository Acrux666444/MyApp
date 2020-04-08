class AuthenticationService {
    registerSuccessfulLogin(username, password){
        console.log("Authenticate Method")
        sessionStorage.setItem('authenticatedUser', username);
    }

    deleteAuthenticate(){
        console.log("Delete Auth Method")
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggenIn(){
        console.log("Check user is logeed");
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
            return false
        }else{
            return true;
        }
    }
}

export default new AuthenticationService()