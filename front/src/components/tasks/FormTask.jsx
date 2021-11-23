import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/ProjectContext'

const FormTask = () => {
  const { project } = useContext(ProjectContext)
  if(!project) return null
  return (
    <div className='formulario'>
      <form>
          <div className="contenedor-input">
            <input
              type="text"
              name='name'
              className='input-text'
              placeholder='nueva tarea'
              />
          </div>
          <div className="contenedor-input">
            <input
              type="submit"
              className='btn btn-primario btn-block btn-submit'
              value='Agregar tarea'
              />
          </div>
      </form>
    </div>
  )
}

export default FormTask
