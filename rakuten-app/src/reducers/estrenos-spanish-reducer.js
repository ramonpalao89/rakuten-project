import { ESTRENOS_SPANISH_SUCCESS, ESTRENOS_SPANISH_FAILURE } from '../types/estrenos-spanish-types'

const initialState = {
    spanishMovies: [],
    error: ''
}

const estrenosSpanishReducer = (state = initialState, action) => {
    switch(action.type) {
        case ESTRENOS_SPANISH_SUCCESS:
            return {
                ...state,
                spanishMovies: action.payload
            }
        case ESTRENOS_SPANISH_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default estrenosSpanishReducer