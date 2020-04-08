import * as Mutils from '../util/movies_api_util';

export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_MOVIE_ERRORS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_MOVIE_REVIEWS = 'RECEIVE_MOVIE_REVIEWS';
export const RECEIVE_RATING = 'RECEIVE_RATING';
export const RECEIVE_MOVIE_RATINGS = 'RECEIVE_MOVIE_RATINGS';

export const receiveAllMovies = (movies, source) => ({
  type: RECEIVE_ALL_MOVIES,
  movies,
  source
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

export const receiveMovieErrors = errors => ({
  type: RECEIVE_MOVIE_ERRORS,
  errors
});
export const receiveRating = rating => ({
  type: RECEIVE_RATING,
  rating,
});
export const receiveMovieRatings = ratings => ({
  type: RECEIVE_MOVIE_RATINGS,
  ratings,
});
export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});
export const receiveMovieReviews = reviews => ({
  type: RECEIVE_MOVIE_REVIEWS,
  reviews,
});
export const deleteReview = review => ({
  type: DELETE_REVIEW,
  review
});

//https://image.tmdb.org/t/p/w600_and_h900_bestv2/${img_url}

export const fetchUpcoming = () => dispatch => {
  return Mutils.fetchUpcoming().then(
    movies => dispatch(receiveAllMovies(movies, 'upcoming')),
    errors => dispatch(receiveMovieErrors(errors))
  );
}

export const fetchNowPlaying = () => dispatch => {
  return Mutils.fetchNowPlaying().then(
    movies => dispatch(receiveAllMovies(movies, 'nowplaying')),
    errors => dispatch(receiveMovieErrors(errors))
  );
}

export const fetchPopular = () => dispatch => {
  return Mutils.fetchPopular().then(
    movies => dispatch(receiveAllMovies(movies, 'popular')),
    errors => dispatch(receiveMovieErrors(errors))
  );
}

export const fetchTopRated = () => dispatch => {
  return Mutils.fetchTopRated().then(
    movies => dispatch(receiveAllMovies(movies, 'toprated')),
    errors => dispatch(receiveMovieErrors(errors))
  );
}

export const fetchMovies = () => dispatch => (
  Mutils.fetchMovies().then(
    movies => dispatch(receiveAllMovies(movies)),
    errors => dispatch(receiveMovieErrors(errors))
  )
);

//fix reducer
export const getMovie = movieId => dispatch => {

  Mutils.getReviews(movieId).then(
    reviews => dispatch(receiveMovieReviews(reviews))
  );

  Mutils.getRatings(movieId).then(
    ratings => dispatch(receiveMovieRatings(ratings))
  );

  return Mutils.getMovie(movieId).then( 
    movie => dispatch(receiveMovie(movie)),
    errors => dispatch(receiveMovieErrors(errors))
  );
};

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

export const patchRating = rating => dispatch => (
  Mutils.patchRating(rating).then(
    rating => dispatch(receiveRating(rating)),
    errors => dispatch(receiveMovieErrors(errors))
  )
);

export const postRating = rating => dispatch => (
  Mutils.postRating(rating).then(
    rating => dispatch(receiveRating(rating)),
    errors => dispatch(receiveMovieErrors(errors))
  )
);

export const removeReview = reviewId => dispatch => (
  Mutils.removeReview(reviewId).then(
    review => dispatch(deleteReview(review)),
    errors => dispatch(receiveMovieErrors(errors))
  )
);
