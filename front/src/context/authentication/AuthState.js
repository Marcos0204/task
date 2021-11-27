import React, { useReducer } from 'react'
import { AuthReducer } from './AuthReducer';
import AuthContext from './AuthContext';
import clientAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth';
import {REGISTRATION_SUCCESS,
        REGiSTRATION_ERROR,
        GET_USER,
        LOGIN_SUCCESS,
        LOGIN_ERROR,
        SIGN_OFF
    } from "../../types";


const AuthState = ({children}) => {
    const intitialState = {
        token : localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }
    const [ state, dispatch ] = useReducer(AuthReducer, intitialState)
    ///////////////funciones
    //registrar usuario
    
    /////
    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                
            }}      
        >
        {children}
        </AuthContext.Provider>
    )
}


export default AuthState
