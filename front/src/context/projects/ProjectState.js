import React, { useReducer } from 'react'
import ProjectContext from './ProjectContext'
import ProjectReducers from './ProjectReducers'
import { FORM_PROJECT } from '../../types'

const ProjectState = ({children}) => {
    const initialState = {
        form: false
    }
    const [ state, dispatch ] =useReducer(ProjectReducers, initialState);


    ///mostrar formulario
    const showForm = () =>{
        dispatch({
            type: FORM_PROJECT
        })
    }
    return (
        <ProjectContext.Provider
            value={{
                form: state.form,
                showForm: showForm
            }}
        >
            {children}
        </ProjectContext.Provider>
        )
}

export default ProjectState
