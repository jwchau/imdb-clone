import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getMovie } from '../../actions/movies_action';

//component
import BillboardItem from '../frontpage/billboard/billboard_item';
import Rating from '../movies/rating';
import Review from '../movies/review';
import ReviewForm from '../movies/review_form';

class MovieShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovie(this.props.movieId);
  }

  movieReviewForm() {
    return (
      <div>movie review form</div>
    );
  }

  movieReviews() {
    //map over movies.reviews and create Review component for each, give key
    const reviews = [<Review />];
    return (
      <div>
        {reviews}
      </div>
    );
  }

  render() {
    if (this.props.movies.movie === undefined) return null;
    let {movie} = this.props.movies;
    return (
      <div className='movie-show-page'>
        <div className='information'>
          <span>{movie.title} ({movie.year})</span>
          <Rating score={movie.score.toFixed(2)}/>
        </div>

        <div id='movie-billboard'>
          <BillboardItem key={movie.id} movie={movie} />
        </div>

        <ReviewForm />
        {this.movieReviews()}
      </div>
    );
  }
}

const MSTP = (state, ownProps) => ({
  movieId: parseInt(ownProps.match.params.id),
  movies: state.entities.movies,
});

const MDTP = (dispatch, ownProps) => ({
  getMovie: id => dispatch(getMovie(id)),
});

export default connect(
  MSTP,
  MDTP
)(MovieShow);