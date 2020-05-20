import * as TYPES from '../../src/types/movie-detail-types'
import * as ACTIONS from '../../src/actions/movie-detail-actions'

describe('Movie Detail - Actions', () => {

    it('Should movieDetailRequest return the expected object', () => {
        const current = ACTIONS.movieDetailRequest()
        const expected = {
            type: TYPES.MOVIE_DETAIL_REQUEST
        }
        expect(current).toEqual(expected)
    })

    it('Should movieDetailSuccess return the expected object', () => {
        const mockMovie = 'movie1'
        const current = ACTIONS.movieDetailSuccess(mockMovie)
        const expected = {
            type: TYPES.MOVIE_DETAIL_SUCCESS,
            payload: mockMovie
        }
        expect(current).toEqual(expected)
    })

    it('Should movieDetailFailure return the expected object', () => {
        const error = 'error'
        const current = ACTIONS.movieDetailFailure(error)
        const expected = {
            type: TYPES.MOVIE_DETAIL_FAILURE,
            payload: error
        }
        expect(current).toEqual(expected)
    })
})