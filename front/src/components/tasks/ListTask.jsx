import React from 'react'
import Task from './Task'


const ListTask = () => {
    const tasks = [
        {name:'Elegir Plataforma', state:true},
        {name:'Elegir lenguaje', state:true},
        {name:'Elegir back', state:true},
        {name:'Elegir front', state:true},
    ]
  return (
    <>
        <h2> Proyecto: Tienda Virtaul</h2> 
        <ul className="listado-tareas">
            {tasks.length === 0 ?(
                <li className="tarea">No hay tareas</li>
            ) : (
                tasks.map((task, index) => (
                    <Task/>
                ))
            )}
        </ul>
    </>
  )
}

export default ListTask
