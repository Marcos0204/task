import React, { useContext} from 'react'
import TaskContext from '../../context/tasks/TaskContext'
import ProjectContext from '../../context/projects/ProjectContext'

const Task = ({...task}) => {
    const { project } = useContext(ProjectContext)
    const { deleteTask, getTask, taskStatus, saveTask } = useContext(TaskContext)
    const [projectActual] = project

    ///eliminar tarea
    const Taskdelete = id =>{
        deleteTask(id)
        getTask(projectActual.id)
    }

    ///funcion para cambiar el estado de la tarea
    const statusChange = payload => {
        if(payload.state) {
            payload.state= false
        } else {
            payload.state= true
        }
        taskStatus(payload)
    }
    ///selectionar tarea para editar
    const selectTask = item => {
        //console.log(item)
        saveTask(item)
    }
  return (
    <li className="tarea sombra">
        <p>{task.name}</p>
        <div className="estado">
            {task.state ? (
                <button
                    type='button'
                    className='completo'
                    onClick={()=> statusChange(task)}
                    >
                    Completo
                </button>
            ) : (
                <button
                    type='button'
                    className='incompleto'
                    onClick={()=> statusChange(task)}
                    >
                    Incompleto
                </button>
            )}
        </div>
        <div className="acciones">
            <button 
                type='button'
                className='btn btn-primario'
                onClick={() => selectTask(task)}
            >
                editar
            </button>
            <button
                type='button'
                className='btn btn-secundario'
                onClick={() =>Taskdelete(task.id)}
            >
                eliminar
            </button>
        </div>
    </li>
  )
}

export default Task
