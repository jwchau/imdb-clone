import {
  RECEIVE_AWARDS
} from '../../../../actions/movies_action';
// import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_AWARDS:
      return action.awards;
    default:
      return state;
  }
};