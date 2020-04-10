import React from 'react';
import { connect } from 'react-redux';
// import Loading from '../../loading/loading';

import {
  getUserlists,
} from '../../../actions/movies_action';

class MovieUserlists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserlists(this.props.id);
  }

  render() {
    //userlists.results ->
    if (!this.props.userlists.total_results) return null;
    return (
      <div className='userlists'>
        i am movie userlists
      </div>
    );
  }
}

const MSTP = (state, ownProps) => ({
  userlists: state.entities.movies.movie.userlists,
});

const MDTP = (dispatch, ownProps) => ({
  getUserlists: (id, page) => dispatch(getUserlists(id, page)),
});

export default connect(
  MSTP,
  MDTP
)(MovieUserlists);