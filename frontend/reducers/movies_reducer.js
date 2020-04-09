import {
  RECEIVE_ALL_MOVIES,
  RECEIVE_MOVIE,
  RECEIVE_VIDEOS,
} from '../actions/movies_action';
import merge from 'lodash/merge';
import { convertMovies } from '../util/util';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      newState = merge({}, state, {[action.source]: convertMovies(action.movies.results)});  
      return newState
    case RECEIVE_MOVIE:
      return merge({}, state, {movie: action.movie});
    case RECEIVE_VIDEOS:
      newState = merge({}, state, {movie: {videos: action.videos.results}});
      return newState;
    default:
      return state;
  }
};