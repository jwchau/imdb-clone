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
  }

  handleSubmit(e) {
    e.preventDefault();
    let {username, email, password} = this.state;
    if (username === "" || password.length < 6) {
      console.log("invalid username or password");
      return;
    }
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
    this.setState({username: "", password: ""});
  }

  handleChange(key) {
    return e => this.setState({[key]: e.target.value });
  }

  render() {
    let inputEmail = (<span></span>);
    if (this.props.formType === 'signup') 
      inputEmail = (
        <div className='input-div' id='email'>
          <span>Email</span>
              <input
              onChange={this.handleChange('email')}
              type="email"
              value={this.state.email}>
            </input>
          
        </div>
      );

      const inputUsername = (
        <div className="input-div" id='username'>
          <span>Username</span>
          <input
            onChange={this.handleChange('username')}
            type="text"
            value={this.state.username}>
          </input>
        </div>
      );

      const inputPassword = (
        <div className='input-div' id='password'>
          <span>Password</span>
          <input
            onChange={this.handleChange('password')}
            type="password"
            value={this.state.password}>
          </input>
        </div>
      );

      let forgotPassword = (<span></span>)
      if (this.props.formType === 'login') {
        forgotPassword = (
          <div id='forgot-password'>
            <span>Forgot your password?</span>
          </div>
        );
      }

      let reverseLink = (<Link to='/signup'>Create your IMDb account</Link>);
      if (this.props.formType === 'signup')
        reverseLink = (<Link to='/login'>Already have an account? Sign-in</Link>);

    const title = (this.props.formType === "login") ? "Sign-In" : "Create account";

    return(
      <div className='fade session-form'>
        <form onSubmit={this.handleSubmit} className={this.props.formType}>
          <h2>{title}</h2>
          {inputUsername}
          {inputEmail}
          {inputPassword}
          <input className='imdb-button' type="submit" value={title}/>
          {forgotPassword}
          {reverseLink}
        </form>
      </div>
    );
  }
}

export default SessionForm;