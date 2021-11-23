import React, { useReducer } from 'react'
//import { v4 as uuidv4 } from 'uuid';
import TaskContext from './TaskContext';
import { TaskReducers } from './TaskReducers';


import { TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK
    } from '../../types'



const TasktState = ({children}) => {
  
    const initialState = {
        task: [
            {id:1,name:'Elegir Plataforma', state:true, projectID:1},
            {id:2,name:'Elegir lenguaje', state:true, projectID:2},
            {id:3,name:'Elegir back', state:true, projectID:3},
            {id:4,name:'Elegir front', state:true, projectID:1},
            {id:5,name:'Elegir Plataforma', state:true, projectID:1},
            {id:6,name:'Elegir lenguaje', state:true, projectID:2},
            {id:7,name:'Elegir back', state:true, projectID:3},
            {id:8,name:'Elegir front', state:true, projectID:1},
            {id:9,name:'Elegir Plataforma', state:true, projectID:1},
            {id:10,name:'Elegir lenguaje', state:true, projectID:2},
            {id:11,name:'Elegir back', state:true, projectID:3},
            {id:12,name:'Elegir front', state:true, projectID:1},
        ],
        taskProject: null, 
        errorTask: false
    }
    const [ state, dispatch ] =useReducer(TaskReducers, initialState);

    const getTask = (ID) =>{
        dispatch({
            type: TASKS_PROJECT,
            payload: ID
        })
    }
    ////agrgar tareas 
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    ///validar tarea
    const validateTask = () => {
        console.log('validate error')
        dispatch({
            type:VALIDATE_TASK
        })
    }
    ///eliminar tarea
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }


    return (
        <TaskContext.Provider
            value={{
                task: state.task,
                taskProject: state.taskProject,
                errorTask: state.errorTask,
                getTask,
                addTask,
                validateTask,
                deleteTask

            }}
        >
            {children}
        </TaskContext.Provider>
        )
}

export default TasktState
