import * as Mutils from '../util/movies_api_util';

export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_MOVIE_ERRORS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_RATING = 'RECEIVE_RATING';

export const receiveAllMovies = movies => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

export const receiveMovie = payload => ({
  type: RECEIVE_MOVIE,
  payload
});

export const receiveMovieErrors = errors => ({
  type: RECEIVE_MOVIE_ERRORS,
  errors
});
export const receiveRating = rating => ({
  type: RECEIVE_RATING,
  rating,
});
export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});
export const receiveMovieReviews = reviews => ({
  type: RECEIVE_MOVIE_REVIEWS,
  reviews,
});

export const fetchMovies = () => dispatch => (
  Mutils.fetchMovies().then(
    movies => dispatch(receiveAllMovies(movies)),
    errors => dispatch(receiveMovieErrors(errors))
  )
);

export const getMovie = movieId => dispatch => (
  Mutils.getMovie(movieId).then(
    movie => dispatch(receiveMovie(movie)),
    errors => dispatch(receiveMovieErrors(errors))
  )
);

export const postReview = review => dispatch => (
  Mutils.postReview(review).then(
    review => dispatch(receiveReview(review)),
    errors => dispatch(receiveMovieErrors(errors))
  )
);

export const patchReview = review => dispatch => (
  Mutils.patchReview(review).then(
    review => dispatch(receiveReview(review)),
    errors => dispatch(receiveMovieErrors(errors))
  )
);

export const postRating = rating => dispatch => (
  Mutils.postRating(rating).then(
    rating => dispatch(receiveRating(rating)),
    errors => dispatch(receiveMovieErrors(errors))
  )
);
