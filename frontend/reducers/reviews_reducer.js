import {
  RECEIVE_REVIEW,
  RECEIVE_MOVIE
} from '../actions/movies_action';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOVIE:
      return action.payload.reviews;
    case RECEIVE_REVIEW:
      return merge(
        {},
        state,
        {[action.review.userId]: action.review}
      );
    default:
      return state;
  }
};