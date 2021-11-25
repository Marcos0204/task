import React, { useReducer } from 'react'
import { AuthReducer } from './AuthReducer';
import AuthContext from './AuthContext';
import clientAxios from '../../config/axios'
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
    const registerUser = async DATA => {
        try {
            const res = await clientAxios.post('/api/usuario', DATA)
            console.log(res.data)
            dispatch({
                type: REGISTRATION_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            const {data: {msg}} = error.response
            const alert = {
                msg,
                category: 'alerta-error'
            }
            dispatch({
                type: REGiSTRATION_ERROR,
                payload: alert
            })
        }
    }
    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser
            }}      
        >
        {children}
        </AuthContext.Provider>
    )
}


export default AuthState
