import React, { useReducer } from 'react'
import ProjectContext from './ProjectContext'
import ProjectReducers from './ProjectReducers'
import { FORM_PROJECT, GET_PROJECTS } from '../../types'



const ProjectState = ({children}) => {
    const projects= [
        {id:1, name:'tienda virtual'},
        {id:2, name:'tienda de front end'},
        {id:3, name:'tienda de back end'},
    ]
    const initialState = {
        projects: [],
        form: false
    }
    const [ state, dispatch ] =useReducer(ProjectReducers, initialState);


    ///mostrar formulario
    const showForm = () =>{
        dispatch({
            type: FORM_PROJECT
        })
    }
    // obtener proyects
    const getProjects = () =>{
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }
    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm: showForm,
                getProjects: getProjects
            }}
        >
            {children}
        </ProjectContext.Provider>
        )
}

export default ProjectState
