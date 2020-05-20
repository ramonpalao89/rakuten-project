import { SI_TE_PERDISTE_SUCCESS, SI_TE_PERDISTE_FAILURE } from '../types/si-te-perdiste-types'

const initialState = {
    missedMovies: [],
    error: ''
}

const siTePerdisteReducer = (state = initialState, action) => {
    switch(action.type) {
        case SI_TE_PERDISTE_SUCCESS:
            return {
                ...state,
                missedMovies: action.payload
            }
        case SI_TE_PERDISTE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default siTePerdisteReducer