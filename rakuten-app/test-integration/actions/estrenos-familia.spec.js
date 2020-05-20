import * as TYPES from '../../src/types/estrenos-familia-types'
import * as ACTIONS from '../../src/actions/estrenos-familia-actions'

describe('Estrenos Familia - Actions', () => {

    it('Should estrenosFamiliaSuccess return the expected object', () => {
        const mockFamilyMovies = ['movie1', 'movie2', 'movie3']
        const current = ACTIONS.estrenosFamiliaSuccess(mockFamilyMovies)
        const expected = {
            type: TYPES.ESTRENOS_FAMILIA_SUCCESS,
            payload: mockFamilyMovies
        }
        expect(current).toEqual(expected)
    })

    it('Should estrenosFamiliaFailure return the expected object', () => {
        const error = 'error'
        const current = ACTIONS.estrenosFamiliaFailure(error)
        const expected = {
            type: TYPES.ESTRENOS_FAMILIA_FAILURE,
            payload: error
        }
        expect(current).toEqual(expected)
    })

})