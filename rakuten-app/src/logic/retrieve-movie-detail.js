import { movieDetailRequest, movieDetailSuccess, movieDetailFailure } from '../actions/movie-detail-actions'
import axios from 'axios'

export const retrieveMovieDetail = idMovie => {
    return async (dispatch) => {
        dispatch(movieDetailRequest)
        try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/movies/${idMovie}?classification_id=5&device_identifier=web&locale=es&market_code=es`)

            if (response.status === 200) {
                dispatch(movieDetailSuccess(response))
            } else {
                throw new Error('Not Found')
            }
            
        } catch (error) {
            dispatch(movieDetailFailure(error.message))
        }
    }
}