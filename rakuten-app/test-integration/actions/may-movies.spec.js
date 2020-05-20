import * as TYPES from '../../src/types/may-movies-types'
import * as ACTIONS from '../../src/actions/may-movies-actions'

describe('May Movies - Actions', () => {

    it('Should mayMoviesSuccess return the expected object', () => {
        const mockMovies = ['movie1', 'movie2']
        const current = ACTIONS.mayMoviesSuccess(mockMovies)
        const expected = {
            type: TYPES.MAY_MOVIES_SUCCESS,
            payload: mockMovies
        }
        expect(current).toEqual(expected)
    })

    it('Should mayMoviesFailure return the expected object', () => {
        const error = 'error'
        const current = ACTIONS.mayMoviesFailure(error)
        const expected = {
            type: TYPES.MAY_MOVIES_FAILURE,
            payload: error
        }
        expect(current).toEqual(expected)
    })
})