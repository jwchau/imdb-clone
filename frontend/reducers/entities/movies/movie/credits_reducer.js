import {
  RECEIVE_CREDITS
} from '../../../../actions/movies_action';
// import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CREDITS:
      return action.credits.results;
    default:
      return state;
  }
};