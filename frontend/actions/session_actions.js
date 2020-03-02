import * as Sutils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: RECEIVE_LOGOUT
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//TODO: error handling
export const login = user => dispatch => (
    Sutils.login(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = user => dispatch => (
    Sutils.logout().then(() => dispatch(logoutCurrentUser()))
);

export const signup = (user) => dispatch => (
    Sutils.signup(user).then((user) => dispatch(receiveCurrentUser(user)))
);

 
