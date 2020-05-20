import * as TYPES from '../../src/types/movie-trailer-types'
import * as ACTIONS from '../../src/actions/movie-trailer-actions'

describe('Movie Trailer - Actions', () => {

    it('Should movieTrailerRequest return the expected object', () => {
        const current = ACTIONS.movieTrailerRequest()
        const expected = {
            type: TYPES.MOVIE_TRAILER_REQUEST
        }
        expect(current).toEqual(expected)
    })

    it('Should movieTrailerSuccess return the expected object', () => {
        const mockMovieTrailer = 'movieTrailer'
        const current = ACTIONS.movieTrailerSuccess(mockMovieTrailer)
        const expected = {
            type: TYPES.MOVIE_TRAILER_SUCCESS,
            payload: mockMovieTrailer
        }
        expect(current).toEqual(expected)
    })

    it('Should movieTrailerFailure return the expected object', () => {
        const error = 'error'
        const current = ACTIONS.movieTrailerFailure(error)
        const expected = {
            type: TYPES.MOVIE_TRAILER_FAILURE,
            payload: error
        }
        expect(current).toEqual(expected)
    })
})