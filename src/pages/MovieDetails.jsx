import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import tmdbApiConfig from "../tmdbApiConfig";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`movie/${id}`, tmdbApiConfig);
      setMovie(request.data);

      return request;
    };
    fetchData();
  }, [id]);

  return (
    <div
      className="movie-detail-fade"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Navbar />

      <div className="container movie-content-detail">
        <div className="">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p className="text-secondary">Release Date: {movie.release_date}</p>
        </div>
        <div>
          <button className="movie-button">Play</button>
          <button className="movie-button">Add To My List</button>
        </div>
      </div>
      <div className="movie-detail-fade fixed-bottom"></div>
    </div>
  );
}

export default MovieDetails;
