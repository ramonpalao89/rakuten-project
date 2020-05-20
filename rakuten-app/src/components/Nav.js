import React from 'react'
import { Link } from 'react-router-dom'

function Nav({ movieDetail }) {

    return (
        <div className='nav-bar'>
            <div className='nav-bar__logo'>
                <Link to={'/'} style={{ textDecoration: 'none' }}><h3 className='nav-bar__logo-title'>Rakuten TV</h3></Link>
            </div>
            <div className='nav-bar__movie'>
                {movieDetail ? <h3 className='nav-bar__movie-title'>{movieDetail.data.title}</h3> : ''}
            </div>
        </div>
    )
}

export default Nav
