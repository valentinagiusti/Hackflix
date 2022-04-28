import React, { useEffect, useState } from "react";
import axios from "axios";
import tmdbApiConfig from "../tmdbApiConfig";

function Header() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getRandomMovie() {
      const { data } = await axios.get("discover/movie", tmdbApiConfig);
      setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
    }
    getRandomMovie();
  }, []);

  function truncate(string, number) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }

  return (
    <header
      className="header-12"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="movie-content container">
        <h1 className="mb-4 fw-bold">{movie.title}</h1>
        <div className="movie-buttons">
          <button className="movie-button">Play</button>
          <button className="movie-button">Add To My List</button>
        </div>
        <p className="fs-5 movie-overview mt-2">
          {truncate(movie.overview, 150)}
        </p>
      </div>
      <div className="header-fade" />
    </header>
  );
}

export default Header;
