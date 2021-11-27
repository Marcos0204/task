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
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case GET_USER :
            return {
                ...state,
                user: action.payload,
                authenticated: true,
                
                //message: null
            }
        case SIGN_OFF:
        case LOGIN_ERROR:
        case REGiSTRATION_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user:null,
                authenticated:null,
                message: action.payload
            }
    
        default:
            return state;
    }
}
