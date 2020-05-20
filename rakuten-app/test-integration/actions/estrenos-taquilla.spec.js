import * as TYPES from '../../src/types/estrenos-taquilla-types'
import * as ACTIONS from '../../src/actions/estrenos-taquilla-actions'

describe('Estrenos Taquilla - Actions', () => {

    it('Should estrenosTaquillaSuccess return the expected object', () => {
        const mockEstrenosTaquilla = ['movie1', 'movie2']
        const current = ACTIONS.estrenosTaquillaSuccess(mockEstrenosTaquilla)
        const expected = {
            type: TYPES.ESTRENOS_TAQUILLA_SUCCESS,
            payload: mockEstrenosTaquilla
        }
        expect(current).toEqual(expected)
    })

    it('Should estrenosTaquillaFailure return the expected object', () => {
        const error = 'error'
        const current = ACTIONS.estrenosTaquillaFailure(error)
        const expected = {
            type: TYPES.ESTRENOS_TAQUILLA_FAILURE,
            payload: error
        }
        expect(current).toEqual(expected)
    })
})