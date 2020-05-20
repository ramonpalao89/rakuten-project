import { POPULAR_MOVIE_REQUEST, POPULAR_MOVIE_SUCCESS, POPULAR_MOVIE_FAILURE } from '../types/populares-types'

const initialState = {
    loading: false,
    popularMovie: [],
    error: ''
}

const popularMoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case POPULAR_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POPULAR_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                popularMovie: action.payload
            }
        case POPULAR_MOVIE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default popularMoviesReducer