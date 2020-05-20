import { ESTRENOS_TAQUILLA_SUCCESS, ESTRENOS_TAQUILLA_FAILURE } from '../types/estrenos-taquilla-types'

const initialState = {
    releasedMovies: [],
    error: ''
}

const estrenosTaquillaReducer = (state = initialState, action) => {
    switch(action.type) {
        case ESTRENOS_TAQUILLA_SUCCESS:
            return {
                ...state,
                releasedMovies: action.payload
            }
        case ESTRENOS_TAQUILLA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default estrenosTaquillaReducer