import * as TYPES from '../../src/types/may-movies-types'
import mayMoviesReducer from '../../src/reducers/may-movies-reducer'

describe('May Movies - Reducer', () => {
    let initialState

    beforeEach(() => {
        initialState = {
            mayMovies: [],
            error: ''
        }
    })

    it('Should return initial state by default', () => {
        const newState = mayMoviesReducer(initialState, {})
        const expectedState = initialState
        expect(newState).toEqual(expectedState)
    })

    it(`Should return a new state if action type is ${TYPES.MAY_MOVIES_SUCCESS}`, () => {
        const mayMovies = [{title: 'title1', year: 'year1', artwork: 'artwork1'}, {title: 'title2', year: 'year2', artwork: 'artwork2'}]
        const newState = mayMoviesReducer(initialState, {
            type: TYPES.MAY_MOVIES_SUCCESS,
            payload: mayMovies
        })
        expect(newState.mayMovies).toEqual(mayMovies)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.MAY_MOVIES_FAILURE}`, () => {
        const error = 'not found'
        const newState = mayMoviesReducer(initialState, {
            type: TYPES.MAY_MOVIES_FAILURE,
            payload: error
        })
        expect(newState.error).toEqual(error)
        expect(newState.mayMovies).toEqual(initialState.mayMovies)
    })
})