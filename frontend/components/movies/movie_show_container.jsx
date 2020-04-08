import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { convertMovie } from '../../util/util';

import {
  getMovie,
  postReview,
  patchReview,
  removeReview,
  postRating,
  patchRating,
} from '../../actions/movies_action';

//component
import BillboardItem from '../frontpage/billboard/billboard_item';
import Rating from '../movies/rating';
import Review from '../movies/review';
import ReviewForm from '../movies/review_form';
import Loading from '../loading/loading';

//fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


class MovieShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formBool: false,
    };

    this.trailer = null;

    this.toggleForm = this.toggleForm.bind(this);
    this.reviewForm = this.reviewForm.bind(this);
  }

  toggleForm() {
    if (this.props.currentuser)
      this.setState({formBool: !this.state.formBool});
  }

  componentDidMount() {
    this.props.getMovie(this.props.movieId);
    //set trailer
  }

  componentDidUpdate(prevProps) {
    if (parseInt(prevProps.match.params.id) !== this.props.movieId) {
      this.props.getMovie(this.props.movieId);
    }
  }

  movieReviews() {
    if (this.props.reviews.length === 0) return <Loading />;
    const {users, ratings, currentuser} = this.props;
    const reviews = Object.values(this.props.reviews)
      .map(r => <Review
          key={r.userId}
          review={r}
          userId={(currentuser) ? currentuser.id : null}
          username={users[r.userId].username}
          rating={this.getUserRating(r.userId)}
          submitEdits={this.props.submitEdits}
          removeReview={this.props.removeReview}
          postRating={this.props.postRating}
          editRating={this.props.editRating}
      />);

    return (
      <div className='movie-reviews'>
        {(reviews.length === 0) ? null : <h3>User Reviews</h3>}
          {reviews}
      </div>
    );
  }

  alreadyReviewed(id) {
    const arr = Object.values(this.props.reviews);
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el.userId === id) {
        return true;
      }
    }
    return false;
  }

  reviewForm() {
    let {currentuser} = this.props;
    if (currentuser === undefined || this.alreadyReviewed(currentuser.id)) return null;
    else return (
      <div className='review-form'>
        {
          this.props.currentuser
            ? <h3 onClick={this.toggleForm}>Write a review</h3>
            : null
        }
        {
          this.state.formBool
            ? <ReviewForm
              postReview={this.props.postReview}
              movieId={this.props.movieId}
              userId={this.props.currentuser.id}
            />
            : null
        }
      </div>
    );
  }
  
  getUserRating(id = this.props.currentuser.id) {
    const {ratings} = this.props;
    for (let i in ratings) {
      if (ratings[i].userId === id)
        return merge({}, {id: i}, ratings[i]);
    }
    return undefined;
  }

  ratingButton() {
    if (this.props.currentuser !== undefined) {
      return (
        <div id='rating-button'>
          <div id='open-rating'>
            Rate Me!
            <FontAwesomeIcon id='rate-me-star' icon={faStar}/>
          </div>
            <Rating
              userId={this.props.currentuser.id}
              movieId={this.props.movieId}
              postRating={this.props.postRating}
              editRating={this.props.editRating}
              userRating={this.getUserRating()}
            />
        </div>
      );
    }
  }

  render() {
    if (this.props.movies.movie === undefined) return <Loading />;
    // if (this.trailer === null) return <Loading />;
    let movie = convertMovie(this.props.movies.movie);

    return (
      <div className='movie-show-page'>
        <div className='information'>
          <span>{movie.title} ({movie.year})</span>
          {this.ratingButton()}
        </div>

        <div className='details'>
          <span>Runtime: {movie.runtime} Minutes</span>
          <br></br>
          <span>Genres: {extractGenres(movie.genres)}</span>
        </div>

        <div className='poster-trailer'>
          <div id='poster'>
            <img src={movie.posterUrl} alt={movie.title}></img>
          </div>
          <div className='trailer'>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          </div>
        </div>

        <div className='overview'>
          <p>{movie.overview}</p>
        </div>

        <div className='credits'>

        </div>

        {this.reviewForm()}
        {this.movieReviews()}
      </div>
    );
  }
}

const extractGenres = (genres) => {
  const res = [];
  for (let i = 0; i < genres.length; i++) {
    const g = genres[i];
    res.push(g.name + ", ");
  }
  return res;
}

const MSTP = (state, ownProps) => ({
  movieId: parseInt(ownProps.match.params.id),
  movies: state.entities.movies,
  currentuser: state.entities.users[state.session.id],
  users: state.entities.users,
  reviews: state.entities.reviews,
  ratings: state.entities.ratings,
});

const MDTP = (dispatch, ownProps) => ({
  getMovie: id => dispatch(getMovie(id)),
  postReview: review => dispatch(postReview(review)),
  submitEdits: review => dispatch(patchReview(review)),
  removeReview: id => dispatch(removeReview(id)),
  postRating: rating => dispatch(postRating(rating)),
  editRating: (rating) => dispatch(patchRating(rating)),
});

export default connect(
  MSTP,
  MDTP
)(MovieShow);