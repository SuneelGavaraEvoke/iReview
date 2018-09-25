import {SIGNUP_PENDING, SIGN_UP_ERROR, SIGN_UP_SUCCESS} from '../../Constants/SignUp';

export function signUpAction(params) {

    return dispatch => {
        dispatch(isLoading(true))
        callSignUpApi(params, (value) => {
            dispatch(isSuccess(true))
        })
    }
}

function isLoading(isSignUpLoading) {
    return {
        type: SIGNUP_PENDING,
        isSignUpLoading
    }
}
function isSuccess(isSignUpSuccess) {
    return {
        type: SIGN_UP_SUCCESS,
        isSignUpSuccess
    }
}
function isError(isSignUpError) {
    return {
        type: SIGN_UP_ERROR,
        isSignUpError
    }
}
function callSignUpApi({...params}, callBack) {
    setTimeout(() => {
        callBack("Success")
    }, 1000)
}

  