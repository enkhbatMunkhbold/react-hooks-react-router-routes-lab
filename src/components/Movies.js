import React from "react";
import { movies } from "../data";

function Movies() {

  function renderGenres(genres) {
    return genres.map((g, i) => {
      return <li key={i}>{g}</li>
    })
  }

  const renderMovies = () => {
    return movies.map((movie, indx) => {
      return (
        <div key={indx}>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>{renderGenres(movie.genres)}</ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  )
}

export default Movies;
