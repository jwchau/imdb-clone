import * as Mutils from '../util/movies_api_util';

export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_MOVIE_ERRORS';


export const receiveAllMovies = movies => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

export const receiveMovieErrors = errors => ({
  type: RECEIVE_MOVIE_ERRORS,
  errors
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

