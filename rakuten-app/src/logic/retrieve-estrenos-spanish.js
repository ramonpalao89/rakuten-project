import { estrenosSpanishSuccess, estrenosSpanishFailure } from '../actions/estrenos-spanish-actions'
import axios from 'axios'

export const retrieveEstrenosSpanish = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/lists/estrenos-espanoles?classification_id=5&device_identifier=web&locale=es&market_code=es')

            if (response.status === 200) {
                dispatch(estrenosSpanishSuccess(response))

            } else {
                throw new Error('Not Found')
            }
        } catch (error) {
            dispatch(estrenosSpanishFailure(error.message))
        }
    }
}