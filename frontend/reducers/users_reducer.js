import {
    RECEIVE_CURRENT_USER,
    RECEIVE_LOGOUT,
    RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';



export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newUser = {[action.user.id]: action.user};
            return merge({}, state, newUser);
        case RECEIVE_LOGOUT:
            return {};
        default:
            return state;
    }
};