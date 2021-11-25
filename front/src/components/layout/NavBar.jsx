import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/authentication/AuthContext'; 


const NavBar = () => {
  const { user, userAuthenticated, signOff } = useContext(AuthContext)
  useEffect(()=>{
    userAuthenticated()
  },)
  return (
    <header className='app-header'>
        {user && <p className='nombre-usuario'>Hola! <span>{user.name}</span> </p>}
        
        <nav className='nav-principal'>
            <button
              className='btn btn-blank cerrar-sesion'
              onClick={()=> signOff()}
            >
              Cerrar Sesión
            </button>
        </nav>
    </header>
  )
}

export default NavBar
