import {
  RECEIVE_RECOMMENDED
} from '../../../../actions/movies_action';
// import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RECOMMENDED:
      return action.recommended.results;
    default:
      return state;
  }
};