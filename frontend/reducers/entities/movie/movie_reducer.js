import { combineReducers } from 'redux';

const movieReducer = combineReducers({
  details: detailsReducer,
  pictures: upcomingReducer,
  videos: topratedReducer,
  userlists: userlistsReducer,
  awards: movieReducer,
  credits: creditsReducer,
  recommended: recommendedReducer,
});

export default movieReducer;