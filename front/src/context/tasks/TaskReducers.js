import { TASKS_PROJECT,
} from '../../types'


export  const TaskReducers = (state, action) => {
  switch (action.type) {
      case TASKS_PROJECT:
        return {
          ...state,
          taskProject: state.task.filter(task => task.projectID === action.payload )
        }
      default:
          return state
  }
}