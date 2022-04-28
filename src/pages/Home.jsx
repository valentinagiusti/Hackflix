import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import InfiniteScroll from "../components/InfiniteScroll";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";
import ScrollButton from "../components/ScrollButton";
import tmdbApiConfig from "../tmdbApiConfig";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      tmdbApiConfig.params.page = page;
      const { data } = await axios.get("discover/movie", tmdbApiConfig);
      setMovies((prev) => [...prev, ...data.results]);
    };
    getMovies();
  }, [page]);
  return (
    <>
      <Navbar />
      <Header />
      <Movies movies={movies} title={""} rating={0} />
      <InfiniteScroll setPage={setPage} />
      <ScrollButton />
    </>
  );
}

export default Home;
