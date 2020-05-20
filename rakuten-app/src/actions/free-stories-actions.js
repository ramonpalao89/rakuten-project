import { FREE_STORIES_SUCCESS, FREE_STORIES_FAILURE } from '../types/free-stories-types'

export const freeStoriesSuccess = freeStories => {
    return {
        type: FREE_STORIES_SUCCESS,
        payload: freeStories
    }
}

export const freeStoriesFailure = error => {
    return {
        type: FREE_STORIES_FAILURE,
        payload: error
    }
}

