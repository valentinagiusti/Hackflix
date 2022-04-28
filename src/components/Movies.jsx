import React from "react";
import Movie from "./Movie";
function Movies({ movies }) {
  return (
    <div className="container">
      <div className="row g-4 text-center">
        {movies.length === 0 && <p>No movies found.</p>}
        {movies.map((movie) => (
          <ul
            key={movie.id}
            className="col-md-3  d-flex justify-content-around"
          >
            <Movie movie={movie} />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Movies;
