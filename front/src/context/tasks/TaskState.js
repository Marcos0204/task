import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TasksContextç from './TaskContext';
import { TaskReducers } from './TaskReducers';


// import { FORM_PROJECT,
//         GET_PROJECTS,
//         ADD_PROJECT,
//         VALIDATE_FORM,
//         ACTUAL_PROYECT,
//         DELETE_PROJECT
//     } from '../../types'



const TasktState = ({children}) => {
  
    const initialState = {
        projects: [],
        form: false,
        errorForm:  false,
        project: null,

    }
    const [ state, dispatch ] =useReducer(TaskReducers, initialState);

    return (
        <TasksContextç.Provider
            value={{
                name:'hola'
            }}
        >
            {children}
        </TasksContextç.Provider>
        )
}

export default TasktState
