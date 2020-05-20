import * as TYPES from '../../src/types/movie-trailer-types'
import movieTrailerReducer from '../../src/reducers/movie-trailer-reducer'

describe('Movie Trailer - Reducer', () => {
    let initialState

    beforeEach(() => {
        initialState = {
            loading: false,
            movieTrailer: [],
            error: ''
        }
    })

    it('Should return initial state by default', () => {
        const newState = movieTrailerReducer(initialState, {})
        const expectedState = initialState
        expect(newState).toEqual(expectedState)
    })

    it(`Should return a new state if action type is ${TYPES.MOVIE_TRAILER_REQUEST}`, () => {
        const loading = true
        const newState = movieTrailerReducer(initialState, {
            type: TYPES.MOVIE_TRAILER_REQUEST
        })
        expect(newState.loading).toEqual(loading)
        expect(newState.movieTrailer).toEqual(initialState.movieTrailer)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.MOVIE_TRAILER_SUCCESS}`, () => {
        const movieTrailer = [{title: 'title1', year: 'year1', stream: 'stream'}]
        const newState = movieTrailerReducer(initialState, {
            type: TYPES.MOVIE_TRAILER_SUCCESS,
            payload: movieTrailer
        })
        expect(newState.movieTrailer).toEqual(movieTrailer)
        expect(newState.loading).toEqual(initialState.loading)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.MOVIE_TRAILER_FAILURE}`, () => {
        const error = 'not found'
        const newState = movieTrailerReducer(initialState, {
            type: TYPES.MOVIE_TRAILER_FAILURE,
            payload: error
        })
        expect(newState.error).toEqual(error)
        expect(newState.loading).toEqual(initialState.loading)
        expect(newState.movieTrailer).toEqual(initialState.movieTrailer)
    })
})