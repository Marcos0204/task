import React, { useContext, useEffect} from 'react'
import {  Navigate } from 'react-router-dom'
import AuthContext from '../../context/authentication/AuthContext'


const RoutesPlublic = ({children}) => {
  const { authenticated, loading, userAuthenticated } = useContext(AuthContext)
  let token = localStorage.getItem('token') 
  useEffect(() =>{
    if(token) {
      userAuthenticated()
    } 
  })
    //console.log(authenticated)
  return authenticated  ? (
    <Navigate to='/proyectos'/>
  ) : (
    children
  )
}

export default RoutesPlublic
