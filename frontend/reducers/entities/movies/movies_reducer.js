import { combineReducers } from 'redux';

const moviesReducer = combineReducers({
  popular: popularReducer,
  upcoming: upcomingReducer,
  toprated: topratedReducer,
  movie: movieReducer,
});

export default moviesReducer;