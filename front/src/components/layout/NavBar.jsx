import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/authentication/AuthContext'; 


const NavBar = () => {
  const { user, userAuthenticated } = useContext(AuthContext)
  useEffect(()=>{
    userAuthenticated()
  },)
  return (
    <header className='app-header'>
        {user && <p className='nombre-usuario'>Hola! <span>{user.name}</span> </p>}
        
        <nav className='nav-principal'>
            <a href="#!">Cerrar Sesión</a>
        </nav>
    </header>
  )
}

export default NavBar
