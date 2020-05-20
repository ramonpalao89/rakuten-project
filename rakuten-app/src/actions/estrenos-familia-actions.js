import { ESTRENOS_FAMILIA_SUCCESS, ESTRENOS_FAMILIA_FAILURE } from '../types/estrenos-familia-types'

export const estrenosFamiliaSuccess = moviesFamily => {
    return {
        type: ESTRENOS_FAMILIA_SUCCESS,
        payload: moviesFamily
    }
}

export const estrenosFamiliaFailure = error => {
    return {
        type: ESTRENOS_FAMILIA_FAILURE,
        payload: error
    }
}