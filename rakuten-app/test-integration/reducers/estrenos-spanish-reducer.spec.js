import * as TYPES from '../../src/types/estrenos-spanish-types'
import estrenosSpanishReducer from '../../src/reducers/estrenos-spanish-reducer'

describe('Estrenos Spanish - Reducer', () => {

    let initialState

    beforeEach(() => {
        initialState = {
            spanishMovies: [],
            error: ''
        }
    })

    it('Should return initial state if not receiving action type', () => {
        const newState = estrenosSpanishReducer(initialState, {})
        const expectedState = initialState
        expect(newState).toEqual(expectedState)
    })

    it(`Should return a new state if action type is ${TYPES.ESTRENOS_SPANISH_SUCCESS}`, () => {
        const spanishMovies = [{title: 'title1', year: 'year1', artwork: 'artwork1'}, {title: 'title2', year: 'year2', artwork: 'artwork2'}]
        const newState = estrenosSpanishReducer(initialState, {
            type: TYPES.ESTRENOS_SPANISH_SUCCESS,
            payload: spanishMovies
        })
        expect(newState.spanishMovies).toEqual(spanishMovies)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.ESTRENOS_SPANISH_FAILURE}`, () => {
        const error = 'not found'
        const newState = estrenosSpanishReducer(initialState, {
            type: TYPES.ESTRENOS_SPANISH_FAILURE,
            payload: error
        })
        expect(newState.error).toEqual(error)
        expect(newState.spanishMovies).toEqual(initialState.spanishMovies)
    })
})