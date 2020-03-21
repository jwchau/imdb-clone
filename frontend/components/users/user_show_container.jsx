import React from 'react';
import {connect} from 'react-redux';
import Loading from '../loading/loading';

class UserShow extends React.Component {
  constructor(props){
    super(props);
  }



  render() {
    if (this.props.user === undefined) return <Loading />
    return(
      <div className='user-show'>
        <h1>Welcome, {this.props.user.username}!</h1>
      </div>
    );
  }
}

const MSTP = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
});

const MDTP = (dispatch, ownProps) => ({

});

export default connect(
  MSTP,
  MDTP
)(UserShow);