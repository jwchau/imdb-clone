import {
  RECEIVE_TOPRATED
} from '../../actions/movies_action';
// import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOPRATED:
      return action.movies.results;
    default:
      return state;
  }
};