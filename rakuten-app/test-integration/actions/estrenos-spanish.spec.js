import * as TYPES from '../../src/types/estrenos-spanish-types'
import * as ACTIONS from '../../src/actions/estrenos-spanish-actions'

describe('Estrenos Spanish - Actions', () => {

    it('Should estrenosSpanishSuccess return the expected object', () => {
        const mockSpanishMovies = ['movie1', 'movie2']
        const current = ACTIONS.estrenosSpanishSuccess(mockSpanishMovies)
        const expected = {
            type: TYPES.ESTRENOS_SPANISH_SUCCESS,
            payload: mockSpanishMovies
        }
        expect(current).toEqual(expected)
    })

    it('Should estrenosSpanishFailure return the expected object', () => {
        const error = 'error'
        const current = ACTIONS.estrenosSpanishFailure(error)
        const expected = {
            type: TYPES.ESTRENOS_SPANISH_FAILURE,
            payload: error
        }
        expect(current).toEqual(expected)
    })
})