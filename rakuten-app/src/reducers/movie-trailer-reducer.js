import { MOVIE_TRAILER_REQUEST, MOVIE_TRAILER_SUCCESS, MOVIE_TRAILER_FAILURE } from '../types/movie-trailer-types'

const initialState = {
    loading: false,
    movieTrailer: [],
    error: ''
}

const movieTrailerReducer = (state = initialState, action) => {
    switch(action.type) {
        case MOVIE_TRAILER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MOVIE_TRAILER_SUCCESS:
            return {
                ...state,
                loading: false,
                movieTrailer: action.payload
            }
        case MOVIE_TRAILER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default movieTrailerReducer