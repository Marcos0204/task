import React, { useContext, useState, useEffect } from 'react'
import ProjectContext from '../../context/projects/ProjectContext'
import TaskContext from '../../context/tasks/TaskContext'

const FormTask = () => {
  const { project } = useContext(ProjectContext)
  const { tareaSeleccionada, taskProject, errorTask, addTask, validateTask, getTask } = useContext(TaskContext)

  const [task, setTask] = useState({
    name:''
  })
  useEffect(() => {
    if(tareaSeleccionada !== null) {
      setTask(tareaSeleccionada)
    }
  }, [tareaSeleccionada])
  
  ///
  if(!project) return null
  
  
  const [projectActual] = project
 
  const { name } = task 
  
  const handleChange = (e) => {

    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //validar error
    if(name.trim() === '') {
      validateTask()
      return;
    }

    ///agregar la tarea al state
    task.projectID= projectActual.id
    addTask(task)
    getTask(projectActual.id)

    ///reiniciar form
    setTask({
      name:''
    })
  }
  return (
    <div className='formulario'>
      <form 
        onSubmit={handleSubmit}
      >
          <div className="contenedor-input">
            <input
              type="text"
              name='name'
              value={name}
              className='input-text'
              placeholder='nueva tarea'
              onChange={handleChange}
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
      {errorTask && <p className='mensaje error'> el nombre de la tarea es obligatorio </p> }
    </div>
  )
}

export default FormTask
