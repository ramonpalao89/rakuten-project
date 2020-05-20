import { combineReducers } from 'redux'
import popularMoviesReducer from './populares-reducer'
import estrenosFamiliaReducer from './estrenos-familia-reducer'
import estrenosTaquillaReducer from './estrenos-taquilla-reducer'
import estrenosSpanishReducer from './estrenos-spanish-reducer'
import siTePerdisteReducer from './si-te-perdiste-reducer'
import mayMoviesReducer from './may-movies-reducer'
import freeStoriesReducer from './free-stories-reducer'
import movieDetailReducer from './movie-detail-reducer'
import movieTrailerReducer from './movie-trailer-reducer'

const rootReducer = combineReducers({
    popularMovie: popularMoviesReducer,
    moviesFamily: estrenosFamiliaReducer,
    releasedMovies: estrenosTaquillaReducer,
    spanishMovies: estrenosSpanishReducer,
    missedMovies: siTePerdisteReducer,
    mayMovies: mayMoviesReducer,
    freeStories: freeStoriesReducer,
    movieDetail: movieDetailReducer,
    movieTrailer: movieTrailerReducer
})

export default rootReducer