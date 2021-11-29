import React, { useContext, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../../context/authentication/AuthContext'


const RoutesPrivate = ({children}) => {
  const { authenticated, loading, userAuthenticated } = useContext(AuthContext)
  let token = localStorage.getItem('token') 
  useEffect(() =>{
    if(token) {
      userAuthenticated()
    } 
  })
  return !authenticated && !loading ? (
    <Navigate to='/'/> 
  ) : (
    children
  )
}

export default RoutesPrivate
