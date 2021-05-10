import React from 'react';
import { MoviesContext } from '../../contexts/MoviesContext';
import './Banner.styles.scss';

const Banner = () => {
    const { nominations } = React.useContext(MoviesContext)
    return (
        <div>
            {nominations.length === 5 ? (
                <div className='banner'>
                    You've reached the limit of 5 nominations!
                </div>
            ) : null}
        </div>
    )
}

export default Banner;