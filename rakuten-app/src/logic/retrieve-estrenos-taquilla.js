import { estrenosTaquillaSuccess, estrenosTaquillaFailure } from '../actions/estrenos-taquilla-actions'
import axios from 'axios'

export const retrieveEstrenosTaquilla = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/lists/estrenos-imprescindibles-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es')

            if (response.status === 200) {
                dispatch(estrenosTaquillaSuccess(response))
            } else {
                throw new Error('Not Found')
            }

        } catch (error) {
            dispatch(estrenosTaquillaFailure(error.message))
        }
    }
}