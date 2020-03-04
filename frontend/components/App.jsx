import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//components
import SignInPage from './sessions/signin_container';
import HeaderContainer from './header/header_container';
import BillboardContainer from './frontpage/billboard/billboard_container';
import Explore from './frontpage/explore';
import FooterContainer from './frontpage/footer_container';
import SignUpPage from './sessions/signup_container';
import LoginPage from './sessions/login_container';
// import Watchlist from './'

const App = () => (
  <div className="app">
    <div id='fade-overlay'></div>
    <HeaderContainer />
    <Switch>
      <AuthRoute path='/signin' component={SignInPage}/>
      <AuthRoute path='/signup' component={SignUpPage}/>
      <AuthRoute path='/login' component={LoginPage}/>
      <ProtectedRoute path='/watchlist' render={() => (<div>hi</div>)}/>
      <Route path='/explore' component={Explore} />
      <Route path='/' component={BillboardContainer}/>
    </Switch>
    <FooterContainer />
  </div>
);

export default App;