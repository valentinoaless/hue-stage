import React from 'react';
import Set from './Set/Set';
import Home from './Home/Home'
import { Switch, Route } from 'react-router-dom';
import Login from './Auth/Login'
import SignUp from './Auth/Signup'
import styled from 'styled-components'
import About from './About/About'
import Tutorials from './Tutorials/Tutorials'
import Community from './Community/Community'

let Page = styled.div`
    width: 100vh;
    height: 100vh;
`

const App = () => {
    return (
        <div className="global">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/tutorials" component={Tutorials}/>
                <Route exact path="/community" component={Community}/>
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/auth/signup" component={SignUp}/>
                <Route exact path="/dashboard/set" component={Set} />
            </Switch>
        </div>
    );
};

export default App;