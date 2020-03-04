import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignInPage from './sessions/SignInContainer';
import { AuthRoute } from '../util/route_util';

//components
import HeaderContainer from './header/header_container';
import BillboardContainer from './frontpage/billboard/billboard_container';
import Explore from './frontpage/explore';
import FooterContainer from './frontpage/footer_container'

const App = () => (
  <div className="app">
    <div id='fade-overlay'></div>
    <HeaderContainer />
    <Switch>
      <AuthRoute path='/signin' component={SignInPage}/>
      <Route path='/explore' component={Explore} />
      <Route path='/' component={BillboardContainer}/>
    </Switch>
    <FooterContainer />
  </div>
);

export default App;