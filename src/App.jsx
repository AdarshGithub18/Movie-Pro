import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import movies from './data/Movies.json';
import './App.css';

const App = () => {
  const cardData = movies.map((movie) => {
    return <Cards movieID={movie.imdbID} item={movie} />;
  });

  return (
    <>
      <Header />
      <section className="movie-list">{cardData}</section>
    </>
  );
};

export default App;
