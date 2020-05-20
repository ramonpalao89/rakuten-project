import React, { useEffect, useRef } from 'react'
import { retrieveMayMovies } from '../logic/retrieve-may-movies'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function MayMovies() {

    useEffect(() => {
        dispatch(retrieveMayMovies())
    }, [])

    const movieData = useSelector(state => state.mayMovies.mayMovies.data)
    const error = useSelector(state => state.mayMovies.error)
    const dispatch = useDispatch()
    const movieRow = useRef()


    return error ? (
        <h2 className='movies__title'>{error}</h2>
    ) : (
        <div className='movies'>
            <div className='movies__title'>
                {movieData && <h2>{movieData.data.name}</h2>}
            </div>
            <div className='movies__display'>
                <button className="movies__display-left" onClick={event => {
                    event.preventDefault()
                    movieRow.current.scrollLeft -= movieRow.current.offsetWidth
                }}><i className="fas fa-angle-left"></i></button>
                <div className="movies__display-carousel" ref={movieRow}>
                    <div className="movies__carousel">
                        {movieData && movieData.data.contents.data.map((movie, index) => <div className="movies__carousel-movie" key={index}><Link to={`movies/${movie.id}`}><img src={movie.images.artwork} alt={movie.title} /></Link><div className='movies__carousel-score'><p className='movies__carousel-star'><i className='fas fa-star'></i>{movie.highlighted_score.score}</p><p className='movies__carousel-votes'><i className='fas fa-user'></i>{movie.highlighted_score.amount_of_votes}</p></div></div>)}
                    </div>
                </div>
                <button className="movies__display-right" onClick={event => {
                    event.preventDefault()
                    movieRow.current.scrollLeft += movieRow.current.offsetWidth
                }}><i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default MayMovies
