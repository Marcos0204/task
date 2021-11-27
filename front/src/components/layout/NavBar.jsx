import React from 'react'



const NavBar = () => {
  
  
  return (
    <header className='app-header'>
         <p className='nombre-usuario'>Hola! <span>Leon!</span> </p>
        
        <nav className='nav-principal'>
            <button
              className='btn btn-blank cerrar-sesion'
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
