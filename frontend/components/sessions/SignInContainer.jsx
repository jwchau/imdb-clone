import LFC from './LoginFormContainer';
import SFC from './SignupFormContainer';

import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class SignInPage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div class='signin-page'>
        <div className='signin-options'>
          <h3>Sign In</h3>
          <div>IMDB</div>
          <div>Amazon</div>
          <div>Facebook</div>
          <div>Google</div>
        </div>
        <div className='signin-perks'>
          <h3>Benefits of your free IMDb Account</h3>
          <h4>IMDb TV</h4>
          <p>Watch full-length movies, shows, and more for free.</p>
          <h4>Personalized Recommendations</h4>
          <p>Discover shows you'll love.</p>
          <h4>Your Watchlist</h4>
          <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
          <h4>Your Ratings</h4>
          <p>Rate and remember everything you've seen.</p>
          <h4>Contribute to IMDb</h4>
          <p>Add data that will be seen by millions of people and get cool badges.</p>
        </div>
      </div>
    );
  }
}



const MSTP = (state, ownProps) => ({

});

const MDTP = dispatch => ({

});

export default connect(MSTP, MDTP)(SignInPage);