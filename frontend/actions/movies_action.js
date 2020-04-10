import * as Mutils from '../util/movies_api_util';

//hit movies reducer
// export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_UPCOMING = "RECEIVE_UPCOMING";
export const RECEIVE_POPULAR = "RECEIVE_POPULAR";
export const RECEIVE_TOPRATED = "RECEIVE_TOPRATED";

//hit movie reducer
// export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';
export const RECEIVE_PICTURES = 'RECEIVE_PICTURES';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_USERLISTS = 'RECEIVE_USERLISTS';
export const RECEIVE_AWARDS = 'RECEIVE_AWARDS';
export const RECEIVE_CREDITS = 'RECEIVE_CREDITS';
export const RECEIVE_RECOMMENDED = 'RECEIVE_RECOMMENDED';


//other
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_MOVIE_ERRORS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_MOVIE_REVIEWS = 'RECEIVE_MOVIE_REVIEWS';
export const RECEIVE_RATING = 'RECEIVE_RATING';
export const RECEIVE_MOVIE_RATINGS = 'RECEIVE_MOVIE_RATINGS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

// actions for movies
export const receivePopular = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

// actions for movie
// export const receiveMovie = movie => ({
//   type: RECEIVE_MOVIE,
//   movie
// });
export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});


export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});
export const receiveAllMovies = (movies, source) => ({
  type: RECEIVE_ALL_MOVIES,
  movies,
  source
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

//thunk action for movies
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
// export const fetchMovies = () => dispatch => (
//   Mutils.fetchMovies().then(
//     movies => dispatch(receiveAllMovies(movies)),
//     errors => dispatch(receiveMovieErrors(errors))
//   )
// );



//action for movie
// export const getMovie = movieId => dispatch => {
//   Mutils.getUsers(movieId).then(
//     users => dispatch(receiveUsers(users))
//   );

//   Mutils.getReviews(movieId).then(
//     reviews => dispatch(receiveMovieReviews(reviews))
//   );

//   Mutils.getRatings(movieId).then(
//     ratings => dispatch(receiveMovieRatings(ratings))
//   );

//   Mutils.getVideos(movieId).then(
//     videos => dispatch(receiveVideos(videos))
//   );

//   return Mutils.getMovie(movieId).then( 
//     movie => dispatch(receiveMovie(movie)),
//     errors => dispatch(receiveMovieErrors(errors))
//   );
// };

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
