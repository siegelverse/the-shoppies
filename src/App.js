import './App.styles.scss';
import React from 'react';
import MovieContainer from './components/MovieContainer/MovieContainer.component';
import NominationsContainer from './components/NominationsContainer/NominationsContainer.component';
import { MoviesProvider } from './contexts/MoviesContext';
import Banner from './components/Banner/Banner.component';


function App() {
  return (
    <div className="App">
      <MoviesProvider>
        <Banner />
        <h1 className='logo'>The Shoppies</h1>
        <div className='container'>
          <MovieContainer />
          <NominationsContainer />
        </div>
      </MoviesProvider>
    </div>
  );
}

export default App;
