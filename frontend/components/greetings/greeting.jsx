import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.loggedIn = this.loggedIn.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let cu = this.props.currentUser;
    if (this.loggedIn()) {
      return (
        <div>
          <h3>Welcome {cu.username}</h3>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Signup</Link>
          <br/>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }

  loggedIn() {
    return !!this.props.currentUser;
  }

}

export default Greeting;