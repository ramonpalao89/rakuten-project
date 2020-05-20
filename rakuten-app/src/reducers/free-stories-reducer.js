import { FREE_STORIES_SUCCESS, FREE_STORIES_FAILURE } from '../types/free-stories-types'

const initialState = {
    freeStories: [],
    error: ''
}

const freeStoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FREE_STORIES_SUCCESS:
            return {
                ...state,
                freeStories: action.payload
            }
        case FREE_STORIES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default freeStoriesReducer