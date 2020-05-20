import { SI_TE_PERDISTE_SUCCESS, SI_TE_PERDISTE_FAILURE } from '../types/si-te-perdiste-types'

export const siTePerdisteSuccess = missedMovies => {
    return {
        type: SI_TE_PERDISTE_SUCCESS,
        payload: missedMovies
    }
}

export const siTePerdisteFailure = error => {
    return {
        type: SI_TE_PERDISTE_FAILURE,
        payload: error
    }
}