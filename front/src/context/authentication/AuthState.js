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
    const registerUser = async DATA => {
        try {
            const res = await clientAxios.post('/api/usuario', DATA)
            //console.log(res.data)
            dispatch({
                type: REGISTRATION_SUCCESS,
                payload: res.data
            })
            userAuthenticated()
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
    //usuario autenticado
    const userAuthenticated = async ()=>{
        const token = localStorage.getItem('token')
        if(token){
            //funcion para enviar el token por header
            tokenAuth(token)
        }
        
        try {
            const {data} = await clientAxios.get('/api/auth')
            console.log(data)
            dispatch({
                type: GET_USER,
                payload: data.user
            })
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }
    /////
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
