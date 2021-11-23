import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TaskContext from './TaskContext';
import { TaskReducers } from './TaskReducers';


import { TASKS_PROJECT,
    } from '../../types'



const TasktState = ({children}) => {
  
    const initialState = {
        task: [
            {name:'Elegir Plataforma', state:true, projectID:1},
            {name:'Elegir lenguaje', state:true, projectID:2},
            {name:'Elegir back', state:true, projectID:3},
            {name:'Elegir front', state:true, projectID:1},
            {name:'Elegir Plataforma', state:true, projectID:1},
            {name:'Elegir lenguaje', state:true, projectID:2},
            {name:'Elegir back', state:true, projectID:3},
            {name:'Elegir front', state:true, projectID:1},
            {name:'Elegir Plataforma', state:true, projectID:1},
            {name:'Elegir lenguaje', state:true, projectID:2},
            {name:'Elegir back', state:true, projectID:3},
            {name:'Elegir front', state:true, projectID:1},
        ],
        taskProject: null
    }
    const [ state, dispatch ] =useReducer(TaskReducers, initialState);

    const getProjects = (ID) =>{
        
        dispatch({
            type: TASKS_PROJECT,
            payload: ID
        })

    }

    return (
        <TaskContext.Provider
            value={{
                task: state.task,
                taskProject: state.taskProject,
                getProjects,

            }}
        >
            {children}
        </TaskContext.Provider>
        )
}

export default TasktState
