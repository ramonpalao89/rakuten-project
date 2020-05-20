import React, { useEffect } from 'react'
import { retrieveMovieTrailer } from '../logic/retrieve-movie-trailer'
import { movieTrailerRequest } from '../actions/movie-trailer-actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function MovieTrailer({ match }) {
    const movieData = useSelector(state => state.movieTrailer.movieTrailer.data)
    const movieDetail = useSelector(state => state.movieDetail.movieDetail.data)
    const error = useSelector(state => state.movieTrailer.error)
    const loading = useSelector(state => state.movieTrailer.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieTrailerRequest())
        dispatch(retrieveMovieTrailer(match.params.id))
    }, [])

    return error ? (
        <h1>{error}</h1>
    ) : loading ? (
        <div className='movie-loading'><h1 className='movie-loading__title'>LOADING...</h1></div>
    ) : (
        <div className='movie-trailer'>
            <div className='movie-trailer__arrow'>
                <Link to={`/movies/${match.params.id}`}><i className='fas fa-arrow-left'></i></Link>
            </div>
            <div className='movie-trailer__video-display'>
                {movieData && <video className='movie-trailer__video' controls autoPlay>
                    <source src={movieData.data.stream_infos[0].url} type='video/mp4'/>
                </video>}
            </div>
        </div>
    )
}

export default MovieTrailer
