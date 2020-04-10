import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE, RECEIVE_MOVIE_ERRORS } from '../../actions/movies_action';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOVIE_ERRORS:
      return action.errors;
    case RECEIVE_MOVIE:
    case RECEIVE_ALL_MOVIES:
      return [];
    default:
      return state;
  }
};

