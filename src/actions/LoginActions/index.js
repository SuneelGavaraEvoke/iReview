
import {LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR} from '../../Constants/Login';

export function login(email, password) {

    return dispatch => {
        dispatch(loginPending(true))
        dispatch(loginError(null))
        perFormLogin(email, password, ( value => {
            if (value === "success") {
                dispatch(loginSuccess(true))
            } else {
                dispatch(loginError(true))
            }
        }))
    }
}
function loginPending(isLoginPending) {

    return {
        type: LOGIN_PENDING,
        isLoginPending
    }
}
function loginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    }
}
function loginError(isLoginError) {
    return {
        type: SET_LOGIN_ERROR,
        isLoginError
    }
}
function perFormLogin(email, password, callback) {

    setTimeout(() => {
        if (email == "" || password == "") {
            callback("please select username and password");
        } else {
            callback("success")
        }
    }, 1000);
    
}