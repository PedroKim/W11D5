import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SearchContainer from './bench/search_container';


const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute exact path='/signup' component={SignupFormContainer}/>
    <AuthRoute exact path='/login' component={LoginFormContainer}/>
    <Route exact path="/" component={SearchContainer}/>
  </div>
);

export default App;