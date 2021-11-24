import React, { useReducer } from 'react'
//import { v4 as uuidv4 } from 'uuid';
import TaskContext from './TaskContext';
import { TaskReducers } from './TaskReducers';


import { TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    TASK_STATUS,
    TASK_SELETED
    } from '../../types'



const TasktState = ({children}) => {
  
    const initialState = {
        task: [
            {id:1,name:'Elegir Plataforma', state:false, projectID:1},
            {id:2,name:'Elegir Plataforma', state:false, projectID:2},
            {id:3,name:'Elegir Plataforma', state:false, projectID:3},
            {id:4,name:'Elegir lenguaje', state:true, projectID:1},
            {id:5,name:'Elegir lenguaje', state:true, projectID:2},
            {id:6,name:'Elegir lenguaje', state:true, projectID:3},
        ],
        taskProject: null, 
        errorTask: false,
        selectedTask: null,
        tareaSeleccionada: null
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
    //cambiar el estado de cada tarea
    const taskStatus = (payload) =>{
       
        dispatch({
            type:TASK_STATUS,
            payload
        })
    }

    ///seleccionar una tarea para editar
    const saveTask = payload =>{
        //console.log(payload)
        dispatch({
            type: TASK_SELETED,
            payload
        })
    } 

    return (
        <TaskContext.Provider
            value={{
                task: state.task,
                taskProject: state.taskProject,
                errorTask: state.errorTask,
                selectedTask: state.selectedTask,
                tareaSeleccionada: state.tareaSeleccionada,
                getTask,
                addTask,
                validateTask,
                deleteTask,
                taskStatus, 
                saveTask

            }}
        >
            {children}
        </TaskContext.Provider>
        )
}

export default TasktState
