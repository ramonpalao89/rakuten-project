import * as TYPES from '../../src/types/populares-types'
import popularMoviesReducer from '../../src/reducers/populares-reducer'

describe('Popular Movies - Reducer', () => {
    let initialState

    beforeEach(() => {
        initialState = {
            loading: false,
            popularMovie: [],
            error: ''
        }
    })

    it('Should return initial state by default', () => {
        const newState = popularMoviesReducer(initialState, {})
        const expectedState = initialState
        expect(newState).toEqual(expectedState)
    })

    it(`Should return a new state if action type is ${TYPES.POPULAR_MOVIE_REQUEST}`, () => {
        const loading = true
        const newState = popularMoviesReducer(initialState, {
            type: TYPES.POPULAR_MOVIE_REQUEST
        })
        expect(newState.loading).toEqual(loading)
        expect(newState.popularMovie).toEqual(initialState.popularMovie)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.POPULAR_MOVIE_SUCCESS}`, () => {
        const popularMovie = [{title: 'title1', year: 'year1', stream: 'stream'}]
        const newState = popularMoviesReducer(initialState, {
            type: TYPES.POPULAR_MOVIE_SUCCESS,
            payload: popularMovie
        })
        expect(newState.popularMovie).toEqual(popularMovie)
        expect(newState.loading).toEqual(initialState.loading)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.POPULAR_MOVIE_FAILURE}`, () => {
        const error = 'not found'
        const newState = popularMoviesReducer(initialState, {
            type: TYPES.POPULAR_MOVIE_FAILURE,
            payload: error
        })
        expect(newState.error).toEqual(error)
        expect(newState.loading).toEqual(initialState.loading)
        expect(newState.popularMovie).toEqual(initialState.popularMovie)
    })
})