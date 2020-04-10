import { 
  RECEIVE_MOVIE, 
  RECEIVE_MOVIE_ERRORS 
} from '../../actions/movies_action';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOVIE_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

