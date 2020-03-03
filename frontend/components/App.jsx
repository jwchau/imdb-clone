import React from "react";
import { Route, Switch } from 'react-router-dom';
import LFC from './sessions/LoginFormContainer';
import SFC from './sessions/SignupFormContainer';
import { AuthRoute } from '../util/route_util';

//components
import HeaderContainer from './header/header_container';
import BillboardContainer from './frontpage/billboard/billboard_container';
import Explore from './frontpage/explore';
import FooterContainer from './frontpage/footer_container'

const App = () => (
  <div className="app">
    {/* <h1>IMDB Clone</h1> */}
    {/* <GreetingContainer /> */}
    <HeaderContainer />
    <Switch>
      <AuthRoute path='/signup' component={SFC} />
      <AuthRoute path='/login' component={LFC} />
      <Route path='/explore' component={Explore} />
      <Route path='/' component={BillboardContainer}/>
    </Switch>
    <FooterContainer />
  </div>
);

export default App;