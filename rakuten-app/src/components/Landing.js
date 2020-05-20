import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { popularMovieRequest } from '../actions/populares-actions'
import { Populares, EstrenosFamilia, EstrenosTaquilla, EstrenosSpanish, SiTePerdiste, MayMovies, FreeStories, Nav } from '../components'

function Landing() {
const loading = useSelector(state => state.popularMovie.loading)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(popularMovieRequest())
}, [])

    return loading ? (
        <div className='movie-loading'><h1 className='movie-loading__title'>LOADING...</h1></div>
       ) : (
       <>
        <Nav />
        <EstrenosTaquilla />
        <MayMovies />
        <EstrenosFamilia />
        <Populares />
        <EstrenosSpanish />
        <SiTePerdiste />
        <FreeStories />
    </>
    )
}

export default Landing
