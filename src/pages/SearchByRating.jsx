import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Rating from "react-rating";
import Navbar from "../components/Navbar";
import tmdbApiConfig from "../tmdbApiConfig";
import InfiniteScroll from "../components/InfiniteScroll";

function SearchByRating() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      tmdbApiConfig.params["vote_average.gte"] = rating * 2 - 1;
      tmdbApiConfig.params.page = page;
      const { data } = await axios.get("discover/movie", tmdbApiConfig);
      setMovies((prev) => [...prev, ...data.results]);
    };
    getMovies();
  }, [page]);

  useEffect(() => {
    const getMovies = async () => {
      tmdbApiConfig.params["vote_average.gte"] = rating * 2 - 1;
      tmdbApiConfig.params.page = 1;
      const { data } = await axios.get("discover/movie", tmdbApiConfig);
      setMovies(data.results);
    };
    getMovies();
  }, [rating]);

  return (
    <div className="text-center">
      <Navbar />
      <Rating
        className="mt-5  search-form"
        initialRating={rating}
        onChange={(newRating) => setRating(newRating)}
      />
      <div className="movies-search-form">
        <Movies movies={movies} />
      </div>
      <InfiniteScroll setPage={setPage} />
    </div>
  );
}

export default SearchByRating;
