import { MAY_MOVIES_SUCCESS, MAY_MOVIES_FAILURE } from '../types/may-movies-types'

const initialState = {
    mayMovies: [],
    error: ''
}

const mayMoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case MAY_MOVIES_SUCCESS: 
            return {
                ...state,
                mayMovies: action.payload
            }
        case MAY_MOVIES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default mayMoviesReducer