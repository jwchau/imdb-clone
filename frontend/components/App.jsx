import React from "react";
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greetings/greeting_container';
import LFC from './sessions/LoginFormContainer';
import SFC from './sessions/SignupFormContainer';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <h1>IMDB Clone</h1>
    <GreetingContainer />
    <Switch>
      <AuthRoute path='/signup' component={SFC} />
      <AuthRoute path='/login' component={LFC} />
      <Route path='/' render={() => <div className='splash'>Splashin'</div>}/>
    </Switch>
  </div>
);

export default App;