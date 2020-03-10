import {
  RECEIVE_MOVIE,
  RECEIVE_RATING
} from '../actions/movies_action';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOVIE:
      return action.payload.ratings;
    case RECEIVE_RATING:
      return merge(
        {},
        state,
        { [action.rating.userId]: action.rating }
      );
    default:
      return state;
  }
};