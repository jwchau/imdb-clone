import React from "react";
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greetings/greeting_container';
import LFC from './sessions/LoginFormContainer';
import SFC from './sessions/SignupFormContainer';
import { AuthRoute } from '../util/route_util';
import BenchIndexContainer from '../components/benches/bench_index_container';


const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    <Switch>
      <AuthRoute path='/signup' component={SFC} />
      <AuthRoute path='/login' component={LFC} />
      <Route path='/' render={() => <div className='splash'>Splashin'</div>}/>
    </Switch>
    <Route exact path="/" component={BenchIndexContainer} />
  </div>
);

export default App;