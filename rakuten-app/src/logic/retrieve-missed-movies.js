import { siTePerdisteSuccess, siTePerdisteFailure } from '../actions/si-te-perdiste-actions'
import axios from 'axios'

const retrieveMissedMovies = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/lists/si-te-perdiste?classification_id=5&device_identifier=web&locale=es&market_code=es')

            if (response.status === 200) {
                dispatch(siTePerdisteSuccess(response))

            } else {
                throw new Error('Not Found')
            }

        } catch (error) {
            dispatch(siTePerdisteFailure(error.message))
        }
    }
}

export default retrieveMissedMovies