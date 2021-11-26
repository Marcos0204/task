import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import NavBar from '../layout/NavBar';
import FormTask from '../tasks/FormTask';
import ListTask from '../tasks/ListTask';
import AuthContext from '../../context/authentication/AuthContext';


const Projects = () => {
  const { userAuthenticated } = useContext(AuthContext)
  useEffect(()=>{
    userAuthenticated()
  },)
  return (
    <div className="contenedor-app">
      <Sidebar/>
      <div className="seccion-principal">
        <NavBar />
        <main>
          <FormTask/>
          <div className="contenedor-tareas">
            <ListTask/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Projects
