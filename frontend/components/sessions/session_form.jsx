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
        
        <h2>{this.props.formType} Form</h2>
        <form onSubmit={this.handleSubmit} className={this.props.formType}>
          <label>Username: 
            <input
              onChange={this.handleChange('username')}
              type="text" 
              value={this.state.username}>
            </input>
          </label>
          {inputEmail}
          <label>Password:
            <input
              onChange={this.handleChange('password')} 
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