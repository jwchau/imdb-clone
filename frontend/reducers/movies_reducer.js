import {
  RECEIVE_ALL_MOVIES,
  RECEIVE_MOVIE,
} from '../actions/movies_action';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return action.movies;
    case RECEIVE_MOVIE:
      return merge({}, state, {movie: action.movie});
    default:
      return state;
  }
};