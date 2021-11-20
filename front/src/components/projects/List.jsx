import React from 'react'
import Project from './Project'

const ListProjects = () => {
    const projects= [
        {name: 'tienda virtual'},
        {name: 'front end'},
        {name: 'back end'}
    ]
  return (
    <ul className='listado-proyectos'>
        {projects?.map(project =>(
            <Project project={project} />
        ))}
    </ul>
  )
}

export default ListProjects
