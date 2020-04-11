import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../loading/loading';

import {
  getRecommended,
} from '../../../actions/movies_action';

class MovieRecs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecommended(this.props.id);
  }

  render() {
    if (this.props.recommended.length < 1) return null;
    return (
      <div className='recommendations'>
        i am movie recommendations
      </div>
    );
  }
}

const MSTP = (state, ownProps) => ({
  recommended: state.entities.movies.movie.recommended,
});

const MDTP = (dispatch, ownProps) => ({
  getRecommended: (id) => dispatch(getRecommended(id)),
});

export default connect(
  MSTP,
  MDTP
)(MovieRecs);