import {
  RECEIVE_MOVIE_RATINGS,
  RECEIVE_RATING
} from '../../actions/movies_action';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOVIE_RATINGS:
      return action.ratings;
    case RECEIVE_RATING:
      return merge(
        {},
        state,
        { [action.rating.id]: action.rating }
      );
    default:
      return state;
  }
};