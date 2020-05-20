import { ESTRENOS_TAQUILLA_SUCCESS, ESTRENOS_TAQUILLA_FAILURE } from '../types/estrenos-taquilla-types'

export const estrenosTaquillaSuccess = releasedMovies => {
    return {
        type: ESTRENOS_TAQUILLA_SUCCESS,
        payload: releasedMovies
    }
}

export const estrenosTaquillaFailure = error => {
    return {
        type: ESTRENOS_TAQUILLA_FAILURE,
        payload: error
    }
}