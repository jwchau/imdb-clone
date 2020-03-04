import React from 'react';

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
        <label>Email:
              <input
            onChange={this.handleChange('email')}
            type="email"
            value={this.state.email}>
          </input>
        </label>
      );
    return(
      <div className='fade session-form'>
        <form onSubmit={this.handleSubmit} className={this.props.formType}>
          <h2>{this.props.formType} Form</h2>
          <label>Username: </label>
            <input
              onChange={this.handleChange('username')}
              type="text" 
              value={this.state.username}>
            </input>
          
          {inputEmail}
          <label>Password: </label>
            <input
              onChange={this.handleChange('password')} 
              type="password"
              value={this.state.password}>
            </input>
          
          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default SessionForm;