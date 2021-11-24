import { TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
  TASK_SELETED
} from '../../types'


export  const TaskReducers = (state, action) => {
  switch (action.type) {
      case TASKS_PROJECT:
        return {
          ...state,
          taskProject: state.task.filter(task => task.projectID === action.payload )
        }
      case ADD_TASK:
        return {
          ...state,
          task: [...state.task, action.payload],
          errorTask: false
        }
      case VALIDATE_TASK: 
        return {
          ...state,
          errorTask: true
        }
      case DELETE_TASK:
        return {
          ...state,
          task: state.task.filter(item => item.id !== action.payload)
        }
      case TASK_STATUS :
        //console.log(action.payload)
        return {
          ...state,
          taskProject:state.taskProject.map(item =>item.id === action.payload.id ? action.payload : item)
        }
      case TASK_SELETED: 
        return {
          ...state,
          tareaSeleccionada: action.payload
        }
      default:
          return state
  }
}