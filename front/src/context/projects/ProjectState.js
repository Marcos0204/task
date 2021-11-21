import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProjectContext from './ProjectContext'
import {ProjectReducers} from './ProjectReducers'
import { FORM_PROJECT,
        GET_PROJECTS,
        ADD_PROJECT
    } from '../../types'



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
    // agregar proyecto
    const addProject = item =>{
        item.id = uuidv4()
        dispatch({
            type:ADD_PROJECT,
            payload: item
        })
    }
    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm: showForm,
                getProjects: getProjects,
                addProject: addProject
            }}
        >
            {children}
        </ProjectContext.Provider>
        )
}

export default ProjectState
