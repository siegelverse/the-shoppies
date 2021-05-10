import React from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import Nomination from '../Nomination/Nomination.component';
import './NominationsContainer.styles.scss';

const NominationsContainer = () => {
    const { nominations } = React.useContext(MoviesContext)
    return (
        <div className='nominations-container'>
            <h1 className='title'>Nominations</h1>
            {nominations && nominations.map((nomination) => (<Nomination key={nomination.imdbID} nomination={nomination} />))}
        </div>
    )
}

export default NominationsContainer;