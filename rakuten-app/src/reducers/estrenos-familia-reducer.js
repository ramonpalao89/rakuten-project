import { ESTRENOS_FAMILIA_SUCCESS, ESTRENOS_FAMILIA_FAILURE } from '../types/estrenos-familia-types'

const initialState = {
    moviesFamily: [],
    error: ''
}

const estrenosFamiliaReducer = (state = initialState, action) => {
    switch(action.type) {
        case ESTRENOS_FAMILIA_SUCCESS:
            return {
                ...state,
                moviesFamily: action.payload
            }
        case ESTRENOS_FAMILIA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default estrenosFamiliaReducer