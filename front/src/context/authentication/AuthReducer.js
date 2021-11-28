import {REGISTRATION_SUCCESS,
        REGiSTRATION_ERROR,
        GET_USER,
        LOGIN_SUCCESS,
        LOGIN_ERROR,
        SIGN_OFF
        } from "../../types";



export  const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTRATION_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                authenticated: true,
                message: null,
                token: localStorage.getItem('token')
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true,
            }

        case LOGIN_ERROR:
        case REGiSTRATION_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                message: action.payload
            }
        case SIGN_OFF:
            localStorage.removeItem('token')
            return {
                authenticated: null,
                user: null,
                message: null
            }
        default:
            return state;
    }
}
