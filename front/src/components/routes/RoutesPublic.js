import React, { useContext} from 'react'
import {  Navigate } from 'react-router-dom'
import AuthContext from '../../context/authentication/AuthContext'


const RoutesPlublic = ({children}) => {
    const { authenticated } = useContext(AuthContext)
    console.log(authenticated)
  return authenticated ? (
    <Navigate to='/proyectos'/>
  ) : (
    children
  )
}

export default RoutesPlublic
