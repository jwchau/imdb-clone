import React from 'react';
import {connect} from 'react-redux';

class UserShow extends React.Component {
  constructor(props){
    super(props);
  }



  render() {

    return(
      <div>
        im user show page
      </div>
    );
  }
}

const MSTP = (state, ownProps) => ({

});

const MDTP = (dispatch, ownProps) => ({

});

export default connect(
  MSTP,
  MDTP
)(UserShow);