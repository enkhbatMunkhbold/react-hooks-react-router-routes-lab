import React from "react";
import { actors } from "../data";

function Actors() {

  function renderActorMovies(movies) {
    return movies.map(m => {
      return <li>{m}</li>
    })
  }

  function renderActors() {
    return actors.map(a => {
      return (
        <div>
          <h3>Name: {a.name}</h3>
          <p>Movies:</p>
          <ul>{renderActorMovies(a.movies)}</ul>
        </div>        
      )
    })
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  )
}

export default Actors;
