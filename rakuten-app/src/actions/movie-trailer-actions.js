import { MOVIE_TRAILER_REQUEST, MOVIE_TRAILER_SUCCESS, MOVIE_TRAILER_FAILURE } from '../types/movie-trailer-types'

export const movieTrailerRequest = () => {
    return {
        type: MOVIE_TRAILER_REQUEST
    }
}

export const movieTrailerSuccess = movieTrailer => {
    return {
        type: MOVIE_TRAILER_SUCCESS,
        payload: movieTrailer
    }
}

export const movieTrailerFailure = error => {
    return {
        type: MOVIE_TRAILER_FAILURE,
        payload: error
    }
}