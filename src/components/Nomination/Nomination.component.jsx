import React from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import './Nomination.styles.scss';

const Nomination = ({ nomination }) => {
    const { removeNomination } = React.useContext(MoviesContext)

    return (
        <div className='nomination'>
            <img src={nomination.Poster} className='poster' alt='poster' />
            <p className='nomination-title'>{nomination.Title} ({nomination.Year})</p>
            <button className='remove-nomination' onClick={() => removeNomination(nomination)}>Remove Nomination</button>
        </div>
    )
}

export default Nomination;