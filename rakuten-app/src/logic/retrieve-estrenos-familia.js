import { estrenosFamiliaSuccess, estrenosFamiliaFailure } from '../actions/estrenos-familia-actions'
import axios from 'axios'

const retrieveEstrenosFamilia = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/lists/estrenos-para-toda-la-familia?classification_id=5&device_identifier=web&locale=es&market_code=es')

            if (response.status === 200) {
                dispatch(estrenosFamiliaSuccess(response))
            } else {
                throw new Error('Not Found')
            }

        } catch (error) {
            dispatch(estrenosFamiliaFailure(error.message))
        }
    }
}

export default retrieveEstrenosFamilia