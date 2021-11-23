import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/ProjectContext'
import TaskContext from '../../context/tasks/TaskContext'

const Project = ({project}) => {
  const { projectAtual } = useContext(ProjectContext)
  const { getTask } = useContext(TaskContext)
  const selectProjects = id => {
    projectAtual(id)
    getTask(id)
  }
  return (
    <li>
        <button
          className='btn btn-blank'
          onClick={() =>selectProjects(project.id)}
        >
            {project.name}
        </button>
    </li>
  )
}

export default Project
