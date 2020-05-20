import * as TYPES from '../../src/types/free-stories-types'
import freeStoriesReducer from '../../src/reducers/free-stories-reducer'

describe('Free Stories - Reducer', () => {
    let initialState

    beforeEach(() => {
        initialState = {
            freeStories: [],
            error: ''
        }
    })

    it('Should return initial state by default', () => {
        const newState = freeStoriesReducer(initialState, {})
        const expectedState = initialState
        expect(newState).toEqual(expectedState)
    })

    it(`Should return a new state if action type is ${TYPES.FREE_STORIES_SUCCESS}`, () => {
        const freeStories = [{title: 'title1', year: 'year1', artwork: 'artwork1'}, {title: 'title2', year: 'year2', artwork: 'artwork2'}]
        const newState = freeStoriesReducer(initialState, {
            type: TYPES.FREE_STORIES_SUCCESS,
            payload: freeStories
        })
        expect(newState.freeStories).toEqual(freeStories)
        expect(newState.error).toEqual(initialState.error)
    })

    it(`Should return a new state if action type is ${TYPES.FREE_STORIES_FAILURE}`, () => {
        const error = 'not found'
        const newState = freeStoriesReducer(initialState, {
            type: TYPES.FREE_STORIES_FAILURE,
            payload: error
        })
        expect(newState.error).toEqual(error)
        expect(newState.freeStories).toEqual(initialState.freeStories)
    })
})