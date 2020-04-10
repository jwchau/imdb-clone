import { combineReducers } from 'redux';

//reducers
import detailsReducer from './details_reducer';
import picturesReducer from './pictures_reducer';
import videosReducer from './videos_reducer';
import userlistsReducer from './userlists_reducer';
import awardsReducer from './awards_reducer';
import creditsReducer from './credits_reducer';
import recommendedReducer from './recommended_reducer';

const movieReducer = combineReducers({
  details: detailsReducer,
  pictures: picturesReducer,
  videos: videosReducer,
  userlists: userlistsReducer,
  awards: awardsReducer,
  credits: creditsReducer,
  recommended: recommendedReducer,
});

export default movieReducer;