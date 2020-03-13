import * as Sutils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';


export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: RECEIVE_LOGOUT
});

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
});

export const login = user => dispatch => (
    Sutils.login(user).then(
        user => (dispatch(receiveCurrentUser(user))),
        errors => (dispatch(receiveSessionErrors(errors.responseJSON)))
    )
);

export const logout = () => dispatch => (
    Sutils.logout().then(
        () => dispatch(logoutCurrentUser()),
        errors => (dispatch(receiveSessionErrors(errors.responseJSON)))
    )
);

export const signup = (user) => dispatch => {
    return Sutils.signup(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => (dispatch(receiveSessionErrors(errors.responseJSON)))
    );
};
    

 
