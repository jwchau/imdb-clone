import {
  RECEIVE_USERLISTS
} from '../../../../actions/movies_action';
// import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERLISTS:
      return action.userlists;
    default:
      return state;
  }
};