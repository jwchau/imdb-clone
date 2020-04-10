import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_error_reducer';
import movieErrorsReducer from './movie_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    movies: movieErrorsReducer,
});

export default errorsReducer;