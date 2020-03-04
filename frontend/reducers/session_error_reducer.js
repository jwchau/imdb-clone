// import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../util/session_api_util'
import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

export default (state = [], action) => {
    Object.freeze(state)
    // debugger
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_SESSION_ERRORS:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
};