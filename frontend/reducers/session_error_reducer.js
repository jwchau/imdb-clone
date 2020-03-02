// import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../util/session_api_util'
import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = [], action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return action.currentUser;
        default:
            return state;

    }
};