import {
  RECEIVE_VIDEOS
} from '../../../../actions/movies_action';
// import merge from 'lodash/merge';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos.results;
    default:
      return state;
  }
};