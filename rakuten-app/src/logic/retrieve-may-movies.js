import { mayMoviesSuccess, mayMoviesFailure } from '../actions/may-movies-actions'
import axios from 'axios'

export const retrieveMayMovies = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/lists/en-mayo-mira-todo-lo-que-quieras?classification_id=5&device_identifier=web&locale=es&market_code=es')

            if(response.status === 200) {
                dispatch(mayMoviesSuccess(response))

            } else {
                throw new Error('Not Found')
            }

        } catch (error) {
            dispatch(mayMoviesFailure(error.message))
        }
    }
}