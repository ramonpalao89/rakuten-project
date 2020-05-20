import { POPULAR_MOVIE_REQUEST, POPULAR_MOVIE_SUCCESS, POPULAR_MOVIE_FAILURE } from '../types/populares-types'

export const popularMovieRequest = () => {
    return {
        type: POPULAR_MOVIE_REQUEST
    }
}

export const popularMovieSuccess = popularMovie => {
    return {
        type: POPULAR_MOVIE_SUCCESS,
        payload: popularMovie
    }
}

export const popularMovieFailure = error => {
    return {
        type: POPULAR_MOVIE_FAILURE,
        payload: error
    }
}
