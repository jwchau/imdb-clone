import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//components
import SignInPage from './sessions/signin_container';
import HeaderContainer from './header/header_container';
import BillboardContainer from './frontpage/billboard/billboard_container';
import FooterContainer from './frontpage/footer_container';
import SignUpPage from './sessions/signup_container';
import LoginPage from './sessions/login_container';
import Watchlist from './frontpage/watchlist';
import UserShowContainer from './users/user_show_container';
import MovieShowContainer from './movies/movie_show_container';
import AllMoviesContainer from './movies/all_movies_container';
import Loading from "./loading/loading";

//extra
// import {fetchMovies} from '../actions/movies_action';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

class App extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount() {
  //   // this.props.dispatch(fetchMovies());
  // }

  render() {
    return (
      <div className="app">
        <div className='gradient-2'></div>
        <div id='fade-overlay'></div>
        <HeaderContainer />
        <Switch>
          <Route exact path='/loading' component={Loading}/>
          <AuthRoute path='/signin' component={SignInPage}/>
          <AuthRoute path='/signup' component={SignUpPage}/>
          <AuthRoute path='/login' component={LoginPage}/>
          <ProtectedRoute path='/users/:id' component={UserShowContainer}/>
          <ProtectedRoute path='/watchlist' component={Watchlist}/>
          <Route path='/movies/:id' component={MovieShowContainer}/>
          <Route path='/movies' component={AllMoviesContainer}/>
          <Route path='/' component={BillboardContainer}/>
        </Switch>
        <Route exact path='/' component={FooterContainer}/>
      </div>
    );
  }

};

// }

export default App;

