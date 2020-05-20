import { popularMovieRequest, popularMovieSuccess, popularMovieFailure } from '../actions/populares-actions'
import axios from 'axios'

export const retrievePopularMovies = () => {
    return async (dispatch) => {
       dispatch(popularMovieRequest)
        
        try {
            const response = await axios.get('https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/lists/populares-en-taquilla?classification_id=5&device_identifier=web&locale=es&market_code=es')
            
            if (response.status === 200) {
                dispatch(popularMovieSuccess(response))
                
            } else {
                throw new Error('Not Found')
            }

        } catch (error) {
            
            dispatch(popularMovieFailure(error.message))
        }
    }
}