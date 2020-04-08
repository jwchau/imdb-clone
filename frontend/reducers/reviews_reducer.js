import {
  RECEIVE_REVIEW,
  RECEIVE_MOVIE_REVIEWS,
  DELETE_REVIEW
} from '../actions/movies_action';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOVIE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge(
        {},
        state,
        {[action.review.id]: action.review}
      );
    case DELETE_REVIEW:
      const newState = Object.assign({}, state);
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};