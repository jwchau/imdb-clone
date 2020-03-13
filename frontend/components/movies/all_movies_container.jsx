import React from 'react';
import { connect } from 'react-redux';

class AllMovies extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return(
      <div className='all-movies'>
        all movies
      </div>
    );
  }
}

const MSTP = (state, ownProps) => ({
  movies: state.entities.movies,
  ownProps,
});

const MDTP = (dispatch, ownProps) => ({

});

export default connect(
  MSTP,
  MDTP
)(AllMovies);