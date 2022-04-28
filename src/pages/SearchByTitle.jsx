import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "../components/InfiniteScroll";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";
import tmdbApiConfig from "../tmdbApiConfig";

function SearchByTitle() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      tmdbApiConfig.params.page = page;
      const { data } = await axios.get("search/movie", tmdbApiConfig);
      setMovies((prev) => [...prev, ...data.results]);
    };
    title && getMovies();
  }, [page, title]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get("search/movie", {
        ...tmdbApiConfig,
        params: {
          ...tmdbApiConfig.params,
          query: title,
          page: 1,
        },
      });
      setMovies(data.results);
    };
    title && getMovies();
  }, [title]);

  return (
    <div>
      {" "}
      <Navbar />
      <form className="search-form" action="">
        <label htmlFor="title" className="visually-hidden">
          Ingrese un título
        </label>
        <input
          className="form-control w-50 mx-auto"
          placeholder="Ingrese un título..."
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </form>
      <div className="movies-search-form" action="">
        <Movies movies={movies} />
        <InfiniteScroll setPage={setPage} />
      </div>
    </div>
  );
}

export default SearchByTitle;
