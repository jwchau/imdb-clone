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
    this.animateLogin = this.animateLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }


  renderErrors() {
    return (
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li className='error' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
    if (this.props.history.length > 1)
      this.props.history.goBack();
    this.setState({username: "", password: "", email: ""});
  }

  handleChange(key) {
    return e => this.setState({[key]: e.target.value });
  }

  animateLogin(name) {
    const speed = 50;
    if (this.state.username.length !== name.length) {
      const fillUsername = setInterval(() => {
        // console.log("filling username");
        if (this.state.username.length !== name.length) {
          this.setState({username: name.slice(0, this.state.username.length + 1)})
        } else {
          this.animateLogin(name);
          clearInterval(fillUsername);
        }
      }, speed);
    } else {
      const pass = 'password';
      const fillPassword = setInterval(() => {
        // console.log("filling password");
        if (this.state.password.length !== pass.length) {
          this.setState({ password: pass.slice(0, this.state.password.length + 1) })
        } else {
          clearInterval(fillPassword);
          const user = Object.assign({}, this.state);
          this.props.processForm({ user });
          this.setState(
            { username: "", password: "", email: "" }
          );
        }
      }, speed);
    }

  }

  loginAsGuest(e) {
    e.preventDefault();
    let { location } = this.props;
    if (location.pathname !== '/login') {
      const user = {
        username: `guestuser${Math.ceil(Math.random() * 5)}`,
        password: 'password',
      }
      this.props.login({user});
    } else {
      this.animateLogin(`guestuser${Math.ceil(Math.random() * 5)}`);
    }
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
          <Link className='dead hyperlink' to='/forgotpassword'>Forgot your password?</Link>
        );
      }

      let guestLogin = (
        <div className='guest imdb-button' onClick={this.loginAsGuest}>
          <span>Guest Login</span>
        </div>
      )

      let reverseLink = (<Link className='hyperlink' to='/signup'>Create your IMDb account</Link>);
      if (this.props.formType === 'signup')
        reverseLink = (<Link className='hyperlink' to='/login'>Already have an account? Sign-in</Link>);

      const title = (this.props.formType === "login") ? "Sign-In" : "Create account";

      return(
        <div className='myFade session-form'>
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