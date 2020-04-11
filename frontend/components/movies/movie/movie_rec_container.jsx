import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../loading/loading';

import {
  getRecommended,
} from '../../../actions/movies_action';

class MovieRecs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieIdx: 0,
    }
  }

  componentDidMount() {
    this.props.getRecommended(this.props.id);
  }

  getRecMovie(id) {
    const { recommended:recs } = this.props;
    return (
      <div>
        {recs[id].title}
      </div>
    );
  }

  formatRecs() {
    const { recommended } = this.props;
    return recommended.map((movie, i) => {
      let {title, release_date, poster_path, vote_average} = movie;
      return (
        <div key={i}>
          {title},
          {release_date},
          {vote_average},
          {poster_path},
        </div>
      );
    });
  }

  render() {
    if (this.props.recommended.length < 1) return null;
    return (
      <div className='recommendations'>
        <div className='rec-list'>
          {this.formatRecs()}
        </div>
        
        <div className='rec-movie'>
          {this.getRecMovie(this.state.movieIdx)}
          <button>Next</button>
        </div>
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