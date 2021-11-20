import React from 'react'

const NavBar = () => {
  return (
    <header className='app-header'>
        <p className='nombre-usuario'>Hola! <span>Marcos</span> </p>
        <nav className='nav-principal'>
            <a href="#!">Cerrar Sesión</a>
        </nav>
    </header>
  )
}

export default NavBar
