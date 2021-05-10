import React from 'react';
import { MdSearch } from 'react-icons/md';
import './SearchInput.styles.scss';

const SearchInput = ({...props}) => {
    return (
        <div className='wrapper'>
            <MdSearch color='inherit' />
            <input className='search-input' {...props} />
        </div>
    )
}

export default SearchInput;