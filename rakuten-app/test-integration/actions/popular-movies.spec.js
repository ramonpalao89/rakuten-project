import * as TYPES from '../../src/types/populares-types'
import * as ACTIONS from '../../src/actions/populares-actions'

describe('Popular Movies - Actions', () => {

    it('Should popularMoviesRequest return the expected object', () => {
        const current = ACTIONS.popularMovieRequest()
        const expected = {
            type: TYPES.POPULAR_MOVIE_REQUEST
        }
        expect(current).toEqual(expected)
    })

    it('Should popularMoviesSuccess return the expected object', () => {
        const mockPopularMovies = ['movie1', 'movie2']
        const current = ACTIONS.popularMovieSuccess(mockPopularMovies)
        const expected = {
            type: TYPES.POPULAR_MOVIE_SUCCESS,
            payload: mockPopularMovies
        }
        expect(current).toEqual(expected)
    })

    it('Should popularMoviesFailure return the expected object', () => {
        const error = 'error'
        const current = ACTIONS.popularMovieFailure(error)
        const expected = {
            type: TYPES.POPULAR_MOVIE_FAILURE,
            payload: error
        }
        expect(current).toEqual(expected)
    })
})