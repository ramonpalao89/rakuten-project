import * as TYPES from '../../src/types/free-stories-types'
import * as ACTIONS from '../../src/actions/free-stories-actions'

describe('Free Stories - Actions', () => {

    it('Should freeStoriesSuccess return the expected object', () => {
        const mockMovies = ['movie1', 'movie2']
        const current = ACTIONS.freeStoriesSuccess(mockMovies)
        const expected = {
            type: TYPES.FREE_STORIES_SUCCESS,
            payload: mockMovies
        }
        expect(current).toEqual(expected)
    })

    it('Should freeStoriesFailure return the expected object', () => {
        const error = 'error'
        const current = ACTIONS.freeStoriesFailure(error)
        const expected = {
            type: TYPES.FREE_STORIES_FAILURE,
            payload: error
        }
        expect(current).toEqual(expected)
    })
})