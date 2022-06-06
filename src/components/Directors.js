import React from "react";
import { directors } from "../data";

function Directors() {

  function renderDirectorMovieList(movies) {
    return movies.map(m => {
      return <li>{m}</li>
    })
  }

  function renderDirectors() {
    return directors.map(director => {
      return (
        <div>
          <h3>Name: {director.name}</h3>
          <p>Movies:</p>
          <ul>{renderDirectorMovieList(director.movies)}</ul>
        </div>        
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  )
}

export default Directors;
