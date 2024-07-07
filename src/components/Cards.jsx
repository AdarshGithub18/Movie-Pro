import React from 'react';

const Cards = ({ item }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-info">
          <img src={item.Poster} className="card-img" alt="movie image" />
          <h4 className="title">{item.Title}</h4>
          <span className="year">{item.Year}</span>
        </div>
      </div>
    </>
  );
};

export default Cards;
