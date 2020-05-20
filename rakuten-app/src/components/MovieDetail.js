import React, { useEffect, useRef } from 'react'
import { retrieveMovieDetail } from '../logic/retrieve-movie-detail'
import { movieDetailRequest } from '../actions/movie-detail-actions'
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Spinner } from '../components'
import { Link } from 'react-router-dom'

function MovieDetail({ match }) {
    const movieDetail = useSelector(state => state.movieDetail.movieDetail.data)
    const loading = useSelector(state => state.movieDetail.loading)
    const error = useSelector(state => state.movieDetail.error)
    const dispatch = useDispatch()
    const movieRow = useRef()

    useEffect(() => {
        dispatch(movieDetailRequest())
        dispatch(retrieveMovieDetail(match.params.id))
    }, [match])

    return loading ? (
        <div className='movie-loading'><h1 className='movie-loading__title'>Loading ...</h1></div>
    ) : (
            <><Nav movieDetail={movieDetail}/>
            {movieDetail && <div>
                <div className='movie-detail' style={{ background: `linear-gradient(to bottom,transparent 50%,rgba(0,0,0,.15) 60%,rgba(0,0,0,.5) 70%,rgba(0,0,0,.7) 80%,#000 100%), url(${movieDetail.data.images.snapshot}) center`, backgroundSize: 'cover', backgroundPositionY: 'top' }}>
                    <div className='movie-detail__icons'>
                        <div className='movie-detail__icons-display'>
                            <Link to={`/movie/${movieDetail.data.id}/trailer`}><i className='fas fa-play-circle'></i></Link>
                            <p>TRÁILER</p>
                        </div>
                        <div className='movie-detail__icons-display'>
                            <i className='fas fa-thumbtack'></i>
                            <p>AÑADIR A QUIERO VER</p>
                        </div>
                    </div>
                    <div className='movie-detail__bottom'>
                        <div className='movie-detail__score'>
                            <p className='movie-detail__star'><i className='fas fa-star'></i>{movieDetail.data.scores[0].score}</p>
                            {movieDetail.data.scores[0].amount_of_votes > 1000 ? <p className='movie-detail__votes'><i className='fas fa-user'></i>{(movieDetail.data.scores[0].amount_of_votes / 1000).toFixed(1)}K</p> : <p className='movie-detail__votes'><i className='fas fa-user'></i>{movieDetail.data.scores[0].amount_of_votes}</p>}
                        </div>
                        <h2 className='movie-detail__title'>{movieDetail.data.title}</h2>
                        <div className='movie-detail__buttons'>
                            <button className='movie-detail__buttons-watch'><p>VER AHORA</p><p className='movie-detail__buttons-price'>desde {movieDetail.data.order_options[0].price}</p></button>
                            <button className='movie-detail__buttons-voucher'>CANJEAR CUPÓN</button>
                        </div>
                    </div>
                </div>
                <div className='movie-information__container'>
                    <div className='movie-information'>
                        <i className='fas fa-user-friends'></i><span>{movieDetail.data.classification.age}</span>
                        <i className='fas fa-clock'></i><span>{movieDetail.data.duration} minutos</span>
                        <i className='far fa-calendar'></i><span>{movieDetail.data.year}</span>
                        <i className='fas fa-flag'></i><span>{movieDetail.data.countries[0].name}</span>
                        <i className='fas fa-info-circle'></i><span>Título original: {movieDetail.data.original_title}</span>
                    </div>
                    <p className='movie-information__plot'>{movieDetail.data.plot}</p>
                    <div className='movie-information__languages'>
                        <div className='movie-information__languages-title'>
                            <i className='fas fa-comment-dots'></i><h4>Idiomas y subtítulos</h4>
                        </div>
                        <div className='movie-information__languages-display'>
                            <div>
                                <h4>Audio</h4>
                                {movieDetail.data.view_options.private.streams[0].audio_languages.map((value, index) => <p key={index}>{value.name}</p>)}
                            </div>
                            <div>
                                <h4>Subtítulos</h4>
                                {movieDetail.data.view_options.private.streams[0].audio_languages.map((value, index) => <p key={index}>{value.name}</p> && <div key={index} className='movie-information__subtitles'>{movieDetail.data.view_options.private.streams[0].subtitle_languages.map((value, index) => <p key={index}>{value.name}</p>)}</div>)}
                            </div>
                        </div>
                    </div>
                    <div className='movie-cast'>
                        <div className='movie-cast__title'>
                            <i className='fas fa-film'></i><h4>Dirección y reparto</h4>
                        </div>
                        <div className='movie-cast__display'>
                            <button className="movie-cast__display-left" onClick={event => {
                                event.preventDefault()
                                movieRow.current.scrollLeft -= movieRow.current.offsetWidth
                            }}><i className="fas fa-angle-left"></i></button>
                            <div className="movie-cast__display-carousel" ref={movieRow}>
                                <div className="movie-cast__carousel">
                                    {movieDetail.data && movieDetail.data.directors.map((director, index) => <div className="movie-cast__carousel-director" key={index}><img src={director.photo}/><p className="movie-cast__carousel-directorname">{director.name}</p><p className="movie-cast__carousel-directorjob">DIRECCIÓN</p></div>)}
                                    {movieDetail.data && movieDetail.data.actors.map((actor, index) => <div className="movie-cast__carousel-actor" key={index}><img src={actor.photo} alt={actor.name} /><p>{actor.name}</p></div>)}
                                </div>
                            </div>
                            <button className="movie-cast__display-right" onClick={event => {
                                event.preventDefault()
                                movieRow.current.scrollLeft += movieRow.current.offsetWidth
                            }}><i className="fas fa-angle-right"></i></button>
                        </div>
                    </div>
                    <div className='movie-bottom__container'>
                        <div className='movie-bottom__score'>
                            <div className='movie-bottom__score-title'>
                                <i className='fas fa-star'></i><h4>Puntuaciones</h4>
                            </div>
                            <div className='movie-bottom__score-content'>
                                {movieDetail.data.scores.map((value, index) => <div key={index} className='movie-bottom__score-info'><a key={index} target='_blank' href={value.href}><div className='movie-bottom__score-circle' key={index}><span className='movie-bottom__score-number'>{value.score}</span><div className='movie-bottom__score-amount'><i className='fas fa-user'></i><span>{value.formatted_amount_of_votes}</span></div></div><p className='movie-bottom__score-sites'>{value.site.name}</p></a></div>)}
                            </div>
                        </div>
                        <div className='movie-bottom__genre'>
                            <div className='movie-bottom__genre-title'>
                                <i className='fas fa-theater-masks'></i><h4>Géneros</h4>
                            </div>
                            <div className='movie-bottom__genre-content'>
                                {movieDetail.data.genres.map((value, index) => <div key={index} className='movie-bottom__genre-info'><img src={value.additional_images.icon}/><p>{value.name}</p></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            </>
        )
}

export default MovieDetail
