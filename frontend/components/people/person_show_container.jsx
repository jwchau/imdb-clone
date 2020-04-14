import { connect } from 'react-redux';
import React, { Component } from 'react';

class PersonShow extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div>
        i am person show
      </div>
    )
  }
}

const MSTP = (state, ownProps) => ({

});

const MDTP = (dispatch, ownProps) => ({

});

export default connect(
  MSTP,
  MDTP
)(PersonShow);
