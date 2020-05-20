import { movieTrailerRequest, movieTrailerSuccess, movieTrailerFailure } from '../actions/movie-trailer-actions'
import axios from 'axios'

export const retrieveMovieTrailer = idMovie => {
    return async (dispatch) => {
        dispatch(movieTrailerRequest)
        try {
            const response = await axios.post('https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es', {
                    audio_language: "SPA",
                    audio_quality: "2.0",
                    content_id: idMovie,
                    content_type: "movies",
                    device_serial: "device_serial_1",
                    device_stream_video_quality: "FHD",
                    player: "web:PD-NONE",
                    subtitle_language: "MIS",
                    video_type: "trailer"
            })

            if(response.status === 200) {
                dispatch(movieTrailerSuccess(response))
            } else {
                throw new Error('Not Found')
            }

        } catch (error) {
            dispatch(movieTrailerFailure(error.message))
        }
    }
}