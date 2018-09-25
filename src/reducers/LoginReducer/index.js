
import {SET_LOGIN_ERROR, SET_LOGIN_SUCCESS, LOGIN_PENDING} from '../../Constants/Login';

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: false
}

export default function loginReducer(state=initialState, acion) {
    switch(acion.type) {
        case SET_LOGIN_SUCCESS:
        return {
            ...state, 
            isLoginSuccess: true,
            isLoginPending: false,
            isLoginError: false
        }
        case SET_LOGIN_ERROR: 
            return {
                ...state, 
                isLoginError: true,
                isLoginPending: false
            }

        case LOGIN_PENDING: 
        return {
            ...state, 
            isLoginPending: true,
            isLoginSuccess: false,
            isLoginError: false
        }
        default:
        return state;
    }
}