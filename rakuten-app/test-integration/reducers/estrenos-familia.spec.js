import * as TYPES from '../../src/types/estrenos-familia-types'
import estrenosFamiliaReducer from '../../src/reducers/estrenos-familia-reducer'

describe('Estrenos Familia - Reducer', () => {

    let initialState

    beforeEach(() => {
        initialState = {
            moviesFamily: [],
            error: ''
        }
    })

    it('Should return initial state by default if not receiving action type', () => {
        const newState = estrenosFamiliaReducer(initialState, {})
        const expectedState = initialState
        expect(newState).toEqual(expectedState)
    })

    it(`Should return new state if action type is ${TYPES.ESTRENOS_FAMILIA_SUCCESS}`, () => {
        const moviesFamily = [{title: 'title1', year: 'year1', artwork: 'artwork1'}, {title: 'title2', year: 'year2', artwork: 'artwork2'}]
        const newState = estrenosFamiliaReducer(initialState, {
            type: TYPES.ESTRENOS_FAMILIA_SUCCESS,
            payload: moviesFamily
        })
        expect(newState.moviesFamily).toEqual(moviesFamily)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return new state if action type is ${TYPES.ESTRENOS_FAMILIA_FAILURE}`, () => {
        const error = 'not found'
        const newState = estrenosFamiliaReducer(initialState, {
            type: TYPES.ESTRENOS_FAMILIA_FAILURE,
            payload: error
        })
        expect(newState.error).toEqual(error)
        expect(newState.moviesFamily).toEqual(initialState.moviesFamily)
    })
})