import React from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import './Movie.styles.scss';

const Movie = ({ movie }) => {
    const { addNomination, nominations } = React.useContext(MoviesContext)

    return (
        <div className='movie'>
            <img className='poster' src={movie.Poster} alt='poster' />
            <p className='movie-title'>{movie.Title} ({movie.Year})</p>
            {
                nominations.length === 5 ? 
                <button className='nomination-button' disabled>Nominate</button>
            :
                <button 
                className='nomination-button'
                disabled={nominations.includes(movie)} 
                onClick={() => addNomination(movie)}
                >
                    Nominate
                </button>
            }
        </div>
    )
}

export default Movie;