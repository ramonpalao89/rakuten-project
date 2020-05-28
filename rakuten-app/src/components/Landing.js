import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { popularMovieRequest } from '../actions/populares-actions'
import { retrieveEstrenosFamilia, retrieveEstrenosSpanish, retrieveEstrenosTaquilla, retrieveFreeStories, retrieveMayMovies, retrieveMissedMovies, retrievePopularMovies} from '../logic'
import { MoviesLanding, Nav } from '../components'

function Landing() {
    const loading = useSelector(state => state.popularMovie.loading)
    const dispatch = useDispatch()
    const movieTaquilla = useSelector(state => state.releasedMovies.releasedMovies.data)
    const mayMovies = useSelector(state => state.mayMovies.mayMovies.data)
    const movieFamilia = useSelector(state => state.moviesFamily.moviesFamily.data)
    const moviePopular = useSelector(state => state.popularMovie.popularMovie.data)
    const movieSpanish = useSelector(state => state.spanishMovies.spanishMovies.data)
    const siTePerdisteMovies = useSelector(state => state.missedMovies.missedMovies.data)
    const freeStories = useSelector(state => state.freeStories.freeStories.data)

    useEffect(() => {
        dispatch(popularMovieRequest())
        dispatch(retrieveEstrenosTaquilla())
        dispatch(retrieveMayMovies())
        dispatch(retrieveEstrenosFamilia())
        dispatch(retrievePopularMovies())
        dispatch(retrieveEstrenosSpanish())
        dispatch(retrieveFreeStories())
        dispatch(retrieveMissedMovies())
    }, [])

    return loading ? (
        <div className='movie-loading'><h1 className='movie-loading__title'>LOADING...</h1></div>
    ) : (
            <>
                <Nav />
                <div style={{marginTop: '100px'}}>
                    <MoviesLanding movieData={movieTaquilla} />
                </div>
                <MoviesLanding movieData={mayMovies} />
                <MoviesLanding movieData={movieFamilia} />
                <MoviesLanding movieData={moviePopular} />
                <MoviesLanding movieData={movieSpanish} />
                <MoviesLanding movieData={siTePerdisteMovies} />
                <MoviesLanding movieData={freeStories} />
            </>
        )
}

export default Landing
