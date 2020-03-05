import {
  RECEIVE_ALL_MOVIES,
  RECEIVE_MOVIE,
} from '../actions/movies_action';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return action.movies;
    default:
      return state;
  }
};