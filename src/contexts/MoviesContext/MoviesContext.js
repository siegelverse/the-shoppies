import React, { createContext, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const getAPI = (search) => `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&type=movie${ search ? `&s=${search}` : '' }`
const loadMovies = (search) => fetch(getAPI(search))

export const MoviesContext = createContext({})

export const MoviesProvider = ({ children }) => {
    const [search, setSearch] = useState(null)
    const [nominations, setNominations] = useState([])
    const [results, setResults] = useState()
    const [debouncedSearch] = useDebounce(search, 1000)

    const addNomination = (nomination) => {
        setNominations((nominations) => [...nominations, nomination])
    }

    const removeNomination = (nominationToRemove) => {
        setNominations(nominations.filter(nomination => {
            return nomination !== nominationToRemove
        }))
    }

    useEffect(() => {
        if (debouncedSearch) {
            console.log(`Searching for: ${debouncedSearch}`)
            loadMovies(debouncedSearch)
                .then((response) => response.json())
                .then((data) => data && setResults(data.Search))
        }
    }, [debouncedSearch])

    return (
        <MoviesContext.Provider value={{
            searchMovies: setSearch,
            addNomination,
            removeNomination,
            nominations,
            results
        }}>
            {children}
        </MoviesContext.Provider>
    )
}