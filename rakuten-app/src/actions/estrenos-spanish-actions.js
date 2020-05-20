import { ESTRENOS_SPANISH_SUCCESS, ESTRENOS_SPANISH_FAILURE } from '../types/estrenos-spanish-types'

export const estrenosSpanishSuccess = spanishMovies => {
    return {
        type: ESTRENOS_SPANISH_SUCCESS,
        payload: spanishMovies
    }
}

export const estrenosSpanishFailure = error => {
    return {
        type: ESTRENOS_SPANISH_FAILURE,
        payload: error
    }
}