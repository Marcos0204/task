import React, {useContext} from 'react'
import Task from './Task'
import ProjectContext from '../../context/projects/ProjectContext'


const ListTask = () => {
    const { project } = useContext(ProjectContext)
    
    if(!project) return <h2>Selecciona un proyecto</h2>
    
    const [projectAtual] = project
    const tasks = [
        {name:'Elegir Plataforma', state:true},
        {name:'Elegir lenguaje', state:true},
        {name:'Elegir back', state:true},
        {name:'Elegir front', state:true},
    ]
  return (
    <>
       <h2> Proyecto: {projectAtual.name}</h2>
        <ul className="listado-tareas">
            {tasks.length === 0 ?(
                <li className="tarea">No hay tareas</li>
            ) : (
                tasks.map((task, index) => (
                    <Task {...task} key={index}/>
                ))
            )}
        </ul>
        <button
            type='button'
            className='btn btn-eliminar'
        >
            Eliminar Proyecto &time;
        </button>
    </>
  )
}

export default ListTask
