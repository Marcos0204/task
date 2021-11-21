import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT } from '../../types/index'

export  const ProjectReducers = (state, action) => {
    switch (action.type) {
        case FORM_PROJECT : 
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS :
            return {
                ...state, 
                projects: action.payload
            }
        case ADD_PROJECT : 
            return {
            ...state,
            projects: [...state.projects, action.payload],
            form: false
        }
        default:
            return state
    }
}