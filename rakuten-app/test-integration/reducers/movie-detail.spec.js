import * as TYPES from '../../src/types/movie-detail-types'
import movieDetailReducer from '../../src/reducers/movie-detail-reducer'

describe('Movie Detail - Reducer', () => {
    let initialState

    beforeEach(() => {
        initialState = {
            loading: false,
            movieDetail: [],
            error: ''
        }
    })

    it('Should return initial state by default', () => {
        const newState = movieDetailReducer(initialState, {})
        const expectedState = initialState
        expect(newState).toEqual(expectedState)
    })

    it(`Should return a new state if action type is ${TYPES.MOVIE_DETAIL_REQUEST}`, () => {
        const loading = true
        const newState = movieDetailReducer(initialState, {
            type: TYPES.MOVIE_DETAIL_REQUEST
        })
        expect(newState.loading).toEqual(loading)
        expect(newState.movieDetail).toEqual(initialState.movieDetail)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.MOVIE_DETAIL_SUCCESS}`, () => {
        const movieDetail = [{title: 'title1', year: 'year1', artwork: 'artwork1'}]
        const newState = movieDetailReducer(initialState, {
            type: TYPES.MOVIE_DETAIL_SUCCESS,
            payload: movieDetail
        })
        expect(newState.movieDetail).toEqual(movieDetail)
        expect(newState.loading).toEqual(initialState.loading)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.MOVIE_DETAIL_FAILURE}`, () => {
        const error = 'not found'
        const newState = movieDetailReducer(initialState, {
            type: TYPES.MOVIE_DETAIL_FAILURE,
            payload: error
        })
        expect(newState.error).toEqual(error)
        expect(newState.loading).toEqual(initialState.loading)
        expect(newState.movieDetail).toEqual(initialState.movieDetail)
    })
})