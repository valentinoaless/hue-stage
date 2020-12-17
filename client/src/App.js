import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';
import axios from 'axios';
import Set from './Set/Set';
import Home from './Home/Home'
import Login from './Auth/Login'
import SignUp from './Auth/Signup'
import About from './About/About'
import Tutorials from './Tutorials/Tutorials'
import Community from './Community/Community';
import Dashboard from './Dashboard/Dashboard';

let Page = styled.div`
    width: 100vh;
    height: 100vh;
`

const App = () => {

    const [user, setUser] = useState({
        loggedIn: false,
        token: ''
    })

    useEffect(() => {
        let isMounted = true;
        authenticate().then((authorized) => {
            if(isMounted) {
                setUser({
                    ...user, 
                    loggedIn: authorized
                })
            }
        })
        return () => { isMounted = false};
    }, [])

    


    const authenticate = async () => {

        let user_auth_token = localStorage.getItem('user_auth_token');

        if(!user_auth_token) return null;

        let authorized = false;
        
        await axios.get('http://localhost:5000/api/user', {
            headers: {
                auth_token: user_auth_token
            }
        })
            .then(res => {
                console.log(res.data.authorized)
                authorized = res.data.authorized;
            }).catch(err => {
                console.log(err);
            })

        return authorized;

    }

    return (
        <div className="global">
        <UserContext.Provider value={{user, setUser}}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/tutorials" component={Tutorials}/>
                <Route exact path="/community" component={Community}/>
                <Route exact path="/auth/login">{user.loggedIn ? <Redirect to="/dashboard"/> : <Login/>}</Route>
                <Route exact path="/auth/signup">{user.loggedIn ? <Redirect to="/dashboard"/> : <SignUp/>}</Route>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/dashboard/set" component={Set} />
            </Switch>
        </UserContext.Provider>
        </div>
    );
};

export default App;