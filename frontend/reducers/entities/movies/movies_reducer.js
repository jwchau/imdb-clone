import { combineReducers } from 'redux';

//reducers
import popularReducer from './popular_reducer';
import upcomingReducer from './upcoming_reducer';
import topratedReducer from './toprated_reducer';
import movieReducer from './movie/movie_reducer';

const moviesReducer = combineReducers({
  popular: popularReducer,
  upcoming: upcomingReducer,
  toprated: topratedReducer,
  movie: movieReducer,
});

export default moviesReducer;