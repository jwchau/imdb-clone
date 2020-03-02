import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.cUsername = this.cUsername.bind(this);
    this.cPassword = this.cPassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
    this.setState({username: "", password: ""});
  }

  cUsername(e) {
    this.setState({ username: e.target.value });
  }

  cPassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return(
      <div className='session-form'>
        <h2>{this.props.formType} Form</h2>
        <form onSubmit={this.handleSubmit} className={this.props.formType}>
          <label>Username: 
            <input
              onChange={this.cUsername}
              type="text" 
              value={this.state.username}>
            </input>
          </label>
          <br/>
          <label>Password: 
            <input
              onChange={this.cPassword} 
              type="password"
              value={this.state.password}>
            </input>
          </label>
          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default SessionForm;