import * as TYPES from '../../src/types/estrenos-taquilla-types'
import estrenosTaquillaReducer from '../../src/reducers/estrenos-taquilla-reducer'

describe('Estrenos Taquilla - Reducer', () => {

    let initialState

    beforeEach(() => {
        initialState = {
            releasedMovies: [],
            error: ''
        }
    })

    it('Should return initial state by default', () => {
        const newState = estrenosTaquillaReducer(initialState, {})
        const expectedState = initialState
        expect(newState).toEqual(expectedState)
    })

    it(`Should return a new state if action type is ${TYPES.ESTRENOS_TAQUILLA_SUCCESS}`, () => {
        const releasedMovies = [{title: 'title1', year: 'year1', artwork: 'artwork1'}, {title: 'title2', year: 'year2', artwork: 'artwork2'}]
        const newState = estrenosTaquillaReducer(initialState, {
            type: TYPES.ESTRENOS_TAQUILLA_SUCCESS,
            payload: releasedMovies
        })
        expect(newState.releasedMovies).toEqual(releasedMovies)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.ESTRENOS_TAQUILLA_FAILURE}`, () => {
        const error = 'not found'
        const newState = estrenosTaquillaReducer(initialState, {
            type: TYPES.ESTRENOS_TAQUILLA_FAILURE,
            payload: error
        })
        expect(newState.error).toEqual(error)
        expect(newState.releasedMovies).toEqual(initialState.releasedMovies)
    })
})