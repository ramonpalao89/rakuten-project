import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAILURE } from '../types/movie-detail-types'

export const movieDetailRequest = () => {
    return {
        type: MOVIE_DETAIL_REQUEST
    }
}

export const movieDetailSuccess = movieDetail => {
    return {
        type: MOVIE_DETAIL_SUCCESS,
        payload: movieDetail
    }
}

export const movieDetailFailure = error => {
    return {
        type: MOVIE_DETAIL_FAILURE,
        payload: error
    }
}