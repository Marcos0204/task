import React, {useContext, useEffect} from 'react'
import Task from './Task'
import ProjectContext from '../../context/projects/ProjectContext'
import TaskContext from '../../context/tasks/TaskContext'


const ListTask = () => {
    const { project, deleteProject } = useContext(ProjectContext)
    const { taskProject, task, getTask } = useContext(TaskContext)
    
    
    useEffect(() =>{
        if(project !== null){
             const [projectAtual] = project
            getTask(projectAtual.id)
        }
        // eslint-disable-next-line
    }, [task])
    if(!project) return <h2>Selecciona un proyecto</h2>
    const [projectAtual] = project
    
    const onClickDetele = () =>{
        deleteProject(projectAtual.id)
    }
  return (
    <>
       <h2> Proyecto: {projectAtual.name}</h2>
        <ul className="listado-tareas">
            {taskProject.length === 0 ?(
                <li className="tarea">No hay tareas</li>
            ) : (
                taskProject.map((task, index) => (
                    <Task {...task} key={index}/>
                ))
            )}
        </ul>
        <button
            type='button'
            onClick={onClickDetele}
            className='btn btn-eliminar'
        >
            Eliminar Proyecto &time;
        </button>
    </>
  )
}

export default ListTask
