import { FORM_PROJECT } from '../../types/index'

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT : 
            return {
                ...state,
                form: true
            }
        default:
            return state
    }
}