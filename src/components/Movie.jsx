import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <>
      <li key={movie.id}>
        <Link to={`/pelicula/${movie.id}`}>
          {movie.poster_path ? (
            <img
              className="img-fluid movie-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
          ) : (
            <div>
              <p>No image</p> <p>{movie.title}</p>
            </div>
          )}
        </Link>
      </li>
    </>
  );
}

export default Movie;
