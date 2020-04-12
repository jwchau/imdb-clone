import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import { extractDetails, loadYoutube } from '../../util/util';

import {
  getDetails,
  getVideos,
  postReview,
  patchReview,
  removeReview,
  postRating,
  patchRating,
} from '../../actions/movies_action';

//component
import Rating from '../movies/rating';
import Review from '../movies/review';
import ReviewForm from '../movies/review_form';
import Loading from '../loading/loading';

//movie detail components
import MovieVideos from './movie/movie_videos';
import MoviePicturesContainer from './movie/movie_pictures_container';
import MovieRecsContainer from './movie/movie_rec_container';
import MovieCreditsContainer from './movie/movie_credits_container';
import MovieDetails from './movie/movie_details';
import MovieUserlistsContainer from './movie/movie_userlists_container';

//fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


class MovieShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formBool: false,
      loading: true,
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
      this.props.getDetails(this.props.movieId);
      this.props.getVideos(this.props.movieId);
  }

  componentDidUpdate(prevProps) {
    if (parseInt(prevProps.match.params.id) !== this.props.movieId) {
      this.props.getDetails(this.props.movieId);
      this.props.getVideos(this.props.movieId);
    }
  }

  movieReviews() {
    const {users, ratings, currentuser} = this.props;
    const reviews = Object.values(this.props.reviews)
      .map(r => {
        if (users[r.userId] === undefined) return <Loading key={r.userId} />;
        return (<Review
          key={r.userId}
          review={r}
          userId={(currentuser) ? currentuser.id : null}
          username={users[r.userId].username}
          rating={this.getUserRating(r.userId)}
          submitEdits={this.props.submitEdits}
          removeReview={this.props.removeReview}
          postRating={this.props.postRating}
          editRating={this.props.editRating}/>)
      });

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
    if (currentuser === undefined) return (
      <div>
        <br></br>
        <h3>Login to review movie</h3>
        <br></br>
      </div>
    );
    if (this.alreadyReviewed(currentuser.id)) return null;
    else return (
      <div className='review-form'>
        {
          (this.props.currentuser)
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

  loadingTrailer(cb) {
    const videos = this.props.movies.movie.videos;
    if (typeof cb === 'function') cb();
    if (videos.length < 1) return <Loading />;
    else if (videos[0] === 'empty') return (<img id='no-trailer' src={window.noTrailer}></img>);
    return (
      <div className='trailer'>
        {this.getTrailer(this.props.movies.movie.videos)}
      </div>
    );
  }

  getTrailer(videos) {
    const videoUrl = videos[0].key;
    return (
      <div className="youtube" data-embed={`${videoUrl}`}>
      </div>
    );
  }

  render() {
    if (Object.values(this.props.movies.movie.details).length < 1) return <Loading />;
    let id = this.props.movieId;
    let details = extractDetails(this.props.movies.movie.details);
    return (
      <div className='movie-show-page'>
        <div className='information'>
          <span>{details.title} ({details.year})</span>
          {this.ratingButton()}
          <span id='score'>
            {details.score.toFixed(1)} / 10 <FontAwesomeIcon icon={faStar}/>
            <br></br>
            from {details.votes} votes
          </span>
        </div>

        <div className='poster-trailer'>
          <div id='poster'>
            <img src={details.posterUrl} alt={details.title}></img>
          </div>
          {this.loadingTrailer(loadYoutube)}
        </div>

        <div className='overview'>
          <p>{details.overview}</p>
        </div>
        
        <MovieVideos videos={this.props.movies.movie.videos}/>
        <MoviePicturesContainer id={id}/>
        <MovieRecsContainer id={id}/>
        <MovieCreditsContainer id={id}/>

        <div className='details-lists'>
          <MovieDetails details={this.props.movies.movie.details}/>
          <MovieUserlistsContainer id={id}/>
        </div>

        {this.reviewForm()}
        {this.movieReviews()}
      </div>
    );
  }
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
  getDetails: id => dispatch(getDetails(id)),
  getVideos: id => dispatch(getVideos(id)),
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