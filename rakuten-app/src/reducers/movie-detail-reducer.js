import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAILURE } from '../types/movie-detail-types'

const initialState = {
    loading: false,
    movieDetail: [],
    error: ''
}

const movieDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case MOVIE_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MOVIE_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                movieDetail: action.payload
            }
        case MOVIE_DETAIL_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default movieDetailReducer