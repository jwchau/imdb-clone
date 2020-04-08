import {
  RECEIVE_ALL_MOVIES,
  RECEIVE_MOVIE,
} from '../actions/movies_action';
import merge from 'lodash/merge';
import { convertMovies } from '../util/util';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      const newState = merge({}, state, {[action.source]: convertMovies(action.movies.results)});  
      return newState
    case RECEIVE_MOVIE:
      return merge({}, state, {movie: action.movie});
    default:
      return state;
  }
};