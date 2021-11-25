import {REGISTRATION_SUCCESS,
        REGiSTRATION_ERROR,
        GET_USER,
        LOGIN_SUCCESS,
        LOGIN_ERROR,
        SIGN_OFF
        } from "../../types";



export  const AuthReducer = (state, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case GET_USER :
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_ERROR:
        case REGiSTRATION_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                message: action.payload
            }
    
        default:
            return state;
    }
}
