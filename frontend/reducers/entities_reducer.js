import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import reviewsReducer from './reviews_reducer';
import ratingsReducer from './ratings_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    reviews: reviewsReducer,
    ratings: ratingsReducer,
});

export default entitiesReducer;