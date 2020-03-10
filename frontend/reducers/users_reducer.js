import { RECEIVE_CURRENT_USER, RECEIVE_LOGOUT} from '../actions/session_actions';
import { RECEIVE_MOVIE } from '../actions/movies_action';
import merge from 'lodash/merge';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newUser = {[action.user.id]: action.user};
            return merge({}, state, newUser);
        case RECEIVE_MOVIE:
            return merge({}, state, action.payload.users);
        case RECEIVE_LOGOUT:
            return state;
        default:
            return state;
    }
};