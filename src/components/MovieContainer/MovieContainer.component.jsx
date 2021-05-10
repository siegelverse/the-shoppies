import React from 'react';
import SearchInput from '../SearchInput/SearchInput.component';
import { MoviesContext } from '../../contexts/MoviesContext';
import Movie from '../Movie/Movie.component';
import './MovieContainer.styles.scss';

const MovieContainer = () => {
    
    const { searchMovies, results } = React.useContext(MoviesContext)
    const onSearch = (event) => {
        searchMovies(event.target.value)
    }

    return (
        <div className='movie-container'>
            <SearchInput placeholder='Search for movies to nominate...' onChange={onSearch} />
            <div className='display-movies'>
                {results && results.map((movie) => (<Movie key={movie.imdbID} movie={movie} />))}
            </div>
        </div>
    )
}

export default MovieContainer;