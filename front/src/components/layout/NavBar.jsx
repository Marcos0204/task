import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/authentication/AuthContext'; 


const NavBar = () => {
  const { user, userAuthenticated, signOff } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{
    userAuthenticated()
   
  },)
  const SIGN_OFF = () =>{
    signOff()
    navigate('/')

  }
  return (
    <header className='app-header'>
        {user && <p className='nombre-usuario'>Hola! <span>{user.name}</span> </p>}
        
        <nav className='nav-principal'>
            <button
              className='btn btn-blank cerrar-sesion'
              onClick={SIGN_OFF }
              style={{
                color:'white'
              }}
            >
              Cerrar Sesión
            </button>
        </nav>
    </header>
  )
}

export default NavBar
