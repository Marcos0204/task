import React, { useContext, useEffect} from 'react'
import Project from './Project'
import ProjectContext from '../../context/projects/ProjectContext'

const ListProjects = () => {
  const { projects, getProjects} = useContext(ProjectContext)
  useEffect(()=>{
    getProjects()
     // eslint-disable-next-line
  }, [])

  if(projects.length === 0 ) return null
  //if(!projects) return null
  return (
    <ul className='listado-proyectos'>
        {projects.map((project, index) =>(
            <Project project={project} key={index} />
        ))}
    </ul>
  )
}

export default ListProjects
