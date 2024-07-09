import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import movies from './data/Movies.json';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Explore from './pages/Explore';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const cardData = movies.map((movie, index) => {
    return <Cards key={index} item={movie} />;
  });

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/Home"
            element={<section className="movie-list">{cardData}</section>}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
