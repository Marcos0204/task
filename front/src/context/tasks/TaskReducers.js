import { TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK
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
      default:
          return state
  }
}