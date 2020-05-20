import * as TYPES from '../../src/types/si-te-perdiste-types'
import siTePerdisteReducer from '../../src/reducers/si-te-perdiste-reducer'

describe('Si Te Perdiste... - Reducer', () => {
    let initialState

    beforeEach(() => {
        initialState = {
            missedMovies: [],
            error: ''
        }
    })

    it('Should return initial state by default', () => {
        const newState = siTePerdisteReducer(initialState, {})
        const expectedState = initialState
        expect(newState).toEqual(expectedState)
    })

    it(`Should return a new state if action type is ${TYPES.SI_TE_PERDISTE_SUCCESS}`, () => {
        const missedMovies = [{title: 'title1', year: 'year1', artwork: 'artwork1'}, {title: 'title2', year: 'year2', artwork: 'artwork2'}]
        const newState = siTePerdisteReducer(initialState, {
            type: TYPES.SI_TE_PERDISTE_SUCCESS,
            payload: missedMovies
        })
        expect(newState.missedMovies).toEqual(missedMovies)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.SI_TE_PERDISTE_FAILURE}`, () => {
        const error = 'not found'
        const newState = siTePerdisteReducer(initialState, {
            type: TYPES.SI_TE_PERDISTE_FAILURE,
            payload: error
        })
        expect(newState.error).toEqual(error)
        expect(newState.missedMovies).toEqual(initialState.missedMovies)
    })
})