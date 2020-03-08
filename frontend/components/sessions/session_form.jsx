import React from 'react';

import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className='errors' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let {username, email, password} = this.state;
    // if (username === "" || password.length < 6) {
    //   return;
    // }
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
    this.setState({username: "", password: "", email: ""});
  }

  handleChange(key) {
    return e => this.setState({[key]: e.target.value });
  }

  loginAsGuest(e) {
    e.preventDefault();
    let { location, history } = this.props;
    if (location.pathname !== '/login') history.push('/login');
    this.setState({username: 'guest_user', password: 'password'});
    this.props.processForm(this.state);
  }

  inputEmail() {
    let inputEmail = ("");
    if (this.props.formType === 'signup')
      inputEmail = (
        <div className='input-div' id='email'>
          <input
            onChange={this.handleChange('email')}
            type="text"
            value={this.state.email}
            maxLength="30"
            required
          >
          </input>
          <span>Email</span>
        </div>
      );
    return inputEmail;
  }

  inputUsername() {
    const inputUsername = (
      <div className="input-div" id='username'>
        <input
          onChange={this.handleChange('username')}
          type="text"
          value={this.state.username}
          maxLength="24"
          required
        >
        </input>
        <span>Username</span>
      </div>
    );
    return inputUsername;
  }

  inputPassword() {
    const inputPassword = (
      <div className='input-div' id='password'>
        <input
          onChange={this.handleChange('password')}
          type="password"
          value={this.state.password}
          maxLength="24"
          required
        >
        </input>
        <span>Password</span>
      </div>
    );
    return inputPassword;
  }

  render() {
      let forgotPassword = ("")
      if (this.props.formType === 'login') {
        forgotPassword = (
          <Link to='/forgotpassword'>Forgot your password?</Link>
        );
      }

      const guestLogin = (
        <div className='guest imdb-button' onClick={this.loginAsGuest}>
          <span>Guest Login</span>
        </div>
      );

      let reverseLink = (<Link to='/signup'>Create your IMDb account</Link>);
      if (this.props.formType === 'signup')
        reverseLink = (<Link to='/login'>Already have an account? Sign-in</Link>);

      const title = (this.props.formType === "login") ? "Sign-In" : "Create account";

      return(
        <div className='fade session-form'>
          <form onSubmit={this.handleSubmit} className={this.props.formType}>
            <h2>{title}</h2>
            {this.renderErrors()}
            <div className='input-divs'>
              {this.inputUsername()}
              {this.inputEmail()}
              {this.inputPassword()}
            </div>
            <button className='imdb-button'>{title}</button>

            {guestLogin}

            <div className='misc'>
              {forgotPassword}
              {reverseLink}
            </div>
          </form>
        </div>
      );
  }
}

export default SessionForm;