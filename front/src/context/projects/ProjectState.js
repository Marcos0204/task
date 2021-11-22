import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProjectContext from './ProjectContext'
import {ProjectReducers} from './ProjectReducers'
import { FORM_PROJECT,
        GET_PROJECTS,
        ADD_PROJECT,
        VALIDATE_FORM,
        ACTUAL_PROYECT
    } from '../../types'



const ProjectState = ({children}) => {
    const projects= [
        {id:1, name:'tienda virtual'},
        {id:2, name:'tienda de front end'},
        {id:3, name:'tienda de back end'},
    ]
    const initialState = {
        projects: [],
        form: false,
        errorForm:  false,
        project: null,

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
    const showError = () =>{
        dispatch({
            type:VALIDATE_FORM
        })
    }
    const projectAtual = itemID => {
        dispatch({
            type:ACTUAL_PROYECT,
            payload: itemID
        })
    }
    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorForm: state.errorForm,
                project:state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                projectAtual
            }}
        >
            {children}
        </ProjectContext.Provider>
        )
}

export default ProjectState
