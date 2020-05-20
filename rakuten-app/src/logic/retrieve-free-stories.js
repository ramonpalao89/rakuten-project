import { freeStoriesSuccess, freeStoriesFailure } from '../actions/free-stories-actions'
import axios from 'axios'

export const retrieveFreeStories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/lists/free-rakuten-stories?classification_id=5&device_identifier=web&locale=es&market_code=es')

            if (response.status === 200) {
               dispatch(freeStoriesSuccess(response))
            } else {
                throw new Error('Not Found')
            }

        } catch (error) {
            dispatch(freeStoriesFailure(error.message))
        }
    }
}