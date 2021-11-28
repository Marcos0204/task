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
            const {data} = await clientAxios.post('/api/usuario', DATA)
            //console.log(data)
            dispatch({
                type: REGISTRATION_SUCCESS,
                payload: data
            })
            userAuthenticated()
        } catch (error) {

            console.log(error.response.data.msg)
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: REGiSTRATION_ERROR,
                payload: alert
            })
        }
    }

    ///obtener el usuario autenticado
    const userAuthenticated = async () =>{
        const token= localStorage.getItem('token')
        if(token){
            tokenAuth(token)
        }
        try {
            const res = await clientAxios.get('/api/auth')
            //console.log(res)
            dispatch({
                type: GET_USER,
                payload: res.data.user
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
