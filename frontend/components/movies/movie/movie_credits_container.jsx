import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../loading/loading';

import {
  getCredits,
} from '../../../actions/movies_action';

class MovieCredits extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCredits(this.props.id);
  }

  render() {
    if (!this.props.credits.cast) return <Loading />;
    return (
      <div className='credits'>
        i am movie credits
      </div>
    );
  }
}

const MSTP = (state, ownProps) => ({
  credits: state.entities.movies.movie.credits,
});

const MDTP = (dispatch, ownProps) => ({
  getCredits: (id) => dispatch(getCredits(id)),
});

export default connect(
  MSTP,
  MDTP
)(MovieCredits);