import React, { useContext} from 'react'
import { Route, Navigate } from 'react-router-dom'
import AuthContext from '../../context/authentication/AuthContext'


const RoutesPrivate = ({children}) => {
    const { authenticated } = useContext(AuthContext)
  return authenticated ? (
    children
  ) : (
    <Navigate to='/'/>
  )
}

export default RoutesPrivate
