import React, { useContext, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../../context/authentication/AuthContext'


const RoutesPrivate = ({children}) => {
  const { authenticated, userAuthenticated } = useContext(AuthContext)
  //let token = 
  useEffect(() =>{
    userAuthenticated() 
  })
  return authenticated ? (
    children
  ) : (
    <Navigate to='/'/>
  )
}

export default RoutesPrivate
