import {
RECEIVE_CURRENT_USER,
RECEIVE_LOGOUT,
} from '../actions/session_actions';

const _nullSession = {
    id: null
};

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {
                id: action.user.id
            });
        case RECEIVE_LOGOUT:
            return _nullSession;
        default:
            return state;
    }
}















