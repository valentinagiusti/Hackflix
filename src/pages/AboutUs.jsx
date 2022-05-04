import React from "react";
import Navbar from "../components/Navbar";
import { FaReact } from "react-icons/fa";
import { FaMdb } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-danger" style={{ paddingTop: "15rem" }}>
          ABOUT THIS
        </h1>
        <p className="text-white">
          This project was made by{" "}
          <span className="fw-bold">Valentina Giusti</span> as a practice
          exercise the Bootcamp dictated by Hack Academy. The development of the
          page lasted one week, with a few details corrected after the Bootcamp
          ended.
        </p>
        <h2 className="text-danger my-5">TECHNOLOGIES</h2>
        <p>
          This project was developed with React.js, making calls to The Movie
          Database API to obtain information about the movies.
        </p>
        <div className="d-flex flex-row">
          <div className="text-center p-4">
            <FaReact size={100} />
            <p className="mt-3">React.js</p>
          </div>
          <div className="text-center p-4">
            <FaMdb size={100} />
            <p className="mt-3">TMDB API</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
