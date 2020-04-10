import {
  RECEIVE_DETAILS
} from '../../../../actions/movies_action';
// import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DETAILS:
      return action.details;
    default:
      return state;
  }
};