
import {SIGN_UP_ERROR, SIGN_UP_SUCCESS, SIGNUP_PENDING} from '../../Constants/SignUp';

const initialState = {
    isSignUpLoading: false,
    isSignUpSuccess: false,
    isSignUpError: false
}

export default function SignUpReducer(state=initialState, action) {

    switch (action.type) {
        case SIGN_UP_ERROR:
        return {
            ...state, 
            isSignUpError: true
        }
        case SIGN_UP_SUCCESS:
        return {
            ...state,
            isSignUpSuccess: true
        }
        case SIGNUP_PENDING: 
        return {
            ...state,
            isSignUpLoading: true
        }
        default:
        return initialState
    }
}
