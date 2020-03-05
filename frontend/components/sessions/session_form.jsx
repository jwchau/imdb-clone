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

  render() {
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

      let forgotPassword = ("")
      if (this.props.formType === 'login') {
        forgotPassword = (
          <Link to='/forgotpassword'>Forgot your password?</Link>
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
          {this.renderErrors()}
          <div className='input-divs'>
            {inputUsername}
            {inputEmail}
            {inputPassword}
          </div>
          <button className='imdb-button'>{title}</button>

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