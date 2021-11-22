import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/ProjectContext'

const Project = ({project}) => {
  const { projectAtual } = useContext(ProjectContext)
  return (
    <li>
        <button
          className='btn btn-blank'
          onClick={() =>projectAtual(project.id)}
        >
            {project.name}
        </button>
    </li>
  )
}

export default Project
