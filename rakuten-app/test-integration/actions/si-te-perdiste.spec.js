import * as TYPES from '../../src/types/si-te-perdiste-types'
import * as ACTIONS from '../../src/actions/si-te-perdiste-actions'

describe('Si te perdiste - Actions', () => {

    it('Should siTePerdisteSuccess return the expected object', () => {
        const mockMovies = ['movie1', 'movie2']
        const current = ACTIONS.siTePerdisteSuccess(mockMovies)
        const expected = {
            type: TYPES.SI_TE_PERDISTE_SUCCESS,
            payload: mockMovies
        }
        expect(current).toEqual(expected)
    })

    it('Should siTePerdisteFailure return the expected object', () => {
        const error = 'error'
        const current = ACTIONS.siTePerdisteFailure(error)
        const expected = {
            type: TYPES.SI_TE_PERDISTE_FAILURE,
            payload: error
        }
        expect(current).toEqual(expected)
    })
})