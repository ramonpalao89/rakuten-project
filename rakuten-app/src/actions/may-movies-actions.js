import { MAY_MOVIES_SUCCESS, MAY_MOVIES_FAILURE } from '../types/may-movies-types'

export const mayMoviesSuccess = mayMovies => {
    return {
        type: MAY_MOVIES_SUCCESS,
        payload: mayMovies
    }
}

export const mayMoviesFailure = error => {
    return {
        type: MAY_MOVIES_FAILURE,
        payload: error
    }
}