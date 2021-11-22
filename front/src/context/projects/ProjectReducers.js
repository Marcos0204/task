import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROYECT } from '../../types/index'

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
            form: false,
            errorForm: false
        }
        case VALIDATE_FORM:
            return {
                ...state,
                errorForm: true
            }
        case ACTUAL_PROYECT: 
            return {
                ...state,
                project: state.projects.filter(item => item.id === action.payload)
            } 
        default:
            return state
    }
}