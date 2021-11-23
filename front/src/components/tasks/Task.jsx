import React, { useContext} from 'react'
import TaskContext from '../../context/tasks/TaskContext'
import ProjectContext from '../../context/projects/ProjectContext'

const Task = ({...task}) => {
    const { project } = useContext(ProjectContext)
    const { deleteTask, getTask } = useContext(TaskContext)
    const [projectActual] = project

    ///eliminar tarea
    const Taskdelete = id =>{
        deleteTask(id)
        getTask(projectActual.id)
    }
  return (
    <li className="tarea sombra">
        <p>{task.name}</p>
        <div className="estado">
            {task.state ? (
                <button
                    type='button'
                    className='completo'
                    >
                    Completo
                </button>
            ) : (
                <button
                    type='button'
                    className='incompleto'
                    >
                    Incompleto
                </button>
            )}
        </div>
        <div className="acciones">
            <button 
                type='button'
                className='btn btn-primario'
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
