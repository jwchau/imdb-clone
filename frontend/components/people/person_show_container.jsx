import { connect } from 'react-redux';
import React, { Component } from 'react';

import {
  getDetailsPerson,
} from '../../util/movies_api_util';


class PersonShow extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    getDetailsPerson(this.props.id)
      .then((details) => {
        this.setState({details});
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      getDetailsPerson(this.props.id)
        .then((details) => {
          this.setState({details});
        });
    }
  }

  render() {
    return (
      <div className='person-show flex-col start-center'>
         
      </div>
    )
  }
}

const MSTP = (state, ownProps) => ({
  id: parseInt(ownProps.match.params.id),

});

const MDTP = (dispatch, ownProps) => ({

});

export default connect(
  MSTP,
  MDTP
)(PersonShow);
