import {
  RECEIVE_POPULAR
} from '../../actions/movies_action';
// import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POPULAR:
      return action.movies.results;
    default:
      return state;
  }
};