import { connect } from 'react-redux';
import React, { Component } from 'react';

import {
  getDetailsPerson,
} from '../../util/movies_api_util';


import Loading from '../loading/loading';

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
      this.setState({details: {}});
      getDetailsPerson(this.props.id)
        .then((details) => {
          this.setState({details});
        });
    }
  }

  render() {
    if (!this.state.details.adult) return <Loading />;
    return (
      <div className='person-show flex-col start-center'>
         <span></span>
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
