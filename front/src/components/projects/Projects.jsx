import React from 'react';
import Sidebar from '../layout/Sidebar';
import NavBar from '../layout/NavBar';


const Projects = () => {
    

  return (
    <div className="contenedor-app">
      <Sidebar/>
      <div className="seccion-principal">
        <NavBar />
        <main>
          <div className="contenedor-tareas">

          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects
