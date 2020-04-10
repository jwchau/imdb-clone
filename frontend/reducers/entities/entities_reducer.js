import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer';
import ratingsReducer from './ratings_reducer';
import moviesReducer from './movies/movies_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    reviews: reviewsReducer,
    ratings: ratingsReducer,
    videos: videosReducer,
    pictures: picturesReducer,
    userLists: userListsReducer,
    awards: awardsReducer,

});

export default entitiesReducer;