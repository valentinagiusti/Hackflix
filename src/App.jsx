import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchByTitle";
import SearchByRating from "./pages/SearchByRating";
import MovieDetails from "./pages/MovieDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-movie-by-title" element={<SearchMovie />} />
          <Route path="/search-movie-by-rating" element={<SearchByRating />} />
          <Route path="/pelicula/:id" element={<MovieDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
