import React from 'react';
import {
  Link,
} from 'react-router-dom';

import Searchbar from './searchbar';
import LoginButton from './loginbutton';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleLogout(e) {
    this.props.logout();
  }

  guestLogin(e) {
    e.preventDefault();
    const user = {
      username: `guestuser${Math.ceil(Math.random() * 5)}`,
      password: 'password',
    }
    this.props.login({user});
  }

  createSignin() {
    let signin = (
      <div className='flex start-center'>
        <Link to='/signin'><LoginButton /></Link>
        <div onClick={this.guestLogin} className='grey-hover button-text'>
          Guest Login
        </div>
      </div>
    );
    if (this.props.currentUser !== undefined) {
      let {currentUser} = this.props;
      signin = (
        <div className='regular-button'>
          <Link to={`/users/${currentUser.id}`} className='grey-hover person-icon'>&#x1f464;</Link>
          <div className='grey-hover' onClick={this.handleLogout}>
            Logout
          </div>
        </div>
      );
    }
    return signin;
  }


  render() {
    return (
      <div className='header'>
        <Link to='/'><img className='header-logo' src={window.imdbLogoURL}/></Link>
        <Searchbar />
        {this.createSignin()}
      </div>
    );
  }
  


}

export default Header;