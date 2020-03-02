import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../util/session_api_util'

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