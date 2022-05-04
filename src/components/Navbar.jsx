import React, { useEffect, useState, Component, Fragment } from "react";
import { ReactComponent as HackflixLogo } from "../img/HACKFLIX.svg";
import { ReactComponent as HamburguerMenu } from "../img/hamburguer.svg";
import { ReactComponent as CloseButton } from "../img/close.svg";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import OffCanvas from "react-aria-offcanvas";

const Navigation = () => (
  <nav id="menu">
    <ul>
      <li>
        <a className="text-decoration-none text-white fw-bold " href="/">
          HOME
        </a>
      </li>
      <li>
        <a
          className="text-decoration-none text-white fw-bold "
          href="/about-this-project"
        >
          ABOUT THIS PROJECT
        </a>
      </li>
      <li>
        <a className="text-decoration-none text-white fw-bold " href="/contact">
          CONTACT
        </a>
      </li>
      <li>
        <a
          className="text-decoration-none text-white fw-bold "
          href="/search-movie-by-title"
        >
          SEARCH BY TITLE
        </a>
      </li>
      <li>
        <a
          className="text-decoration-none text-white fw-bold "
          href="/search-movie-by-rating"
        >
          SEARCH BY RATING
        </a>
      </li>
    </ul>
  </nav>
);

function Navbar() {
  const [show, setShow] = useState(false);
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleOpen = async (ev) => {
    ev.preventDefault();
    setState(true);
  };

  const handleClose = async (ev) => {
    ev.preventDefault();
    setState(false);
  };

  return (
    <div className={`nav-123 ${show && "nav-123-black"}`}>
      <div className="container d-flex justify-content-between">
        <div id="hackflix-logo" className="mt-3  d-none d-md-block">
          <HackflixLogo />
        </div>
        <div className="d-none d-md-inline-block">
          <ul className="d-flex flex-row mt-3  ">
            <li className=" me-4 ">
              <Link
                className={`btn btn-danger ${
                  show && "btn-outline-danger bg-transparent"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className=" me-4">
              <Link
                className={`btn btn-danger ${
                  show && "btn-outline-danger bg-transparent"
                }`}
                to="/about-this-project"
              >
                About This Project
              </Link>
            </li>
            <li className="me-4">
              <Link
                className={`btn btn-danger ${
                  show && "btn-outline-danger bg-transparent"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <DropdownButton
              variant={`danger ${
                show && "outline-danger text-danger bg-transparent"
              }`}
              id="nav-dropdown-dark-example"
              menuVariant="dark"
              title="Search movie"
            >
              <ul className="navbar-button">
                <Dropdown.Item eventKey="1">
                  <li className="text-white">
                    <Link
                      to="/search-movie-by-title"
                      className="text-decoration-none text-white"
                    >
                      Search by Title
                    </Link>
                  </li>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <li>
                    <Link
                      className="text-decoration-none text-white"
                      to="/search-movie-by-rating"
                    >
                      Search by Rating
                    </Link>
                  </li>
                </Dropdown.Item>
              </ul>
            </DropdownButton>
          </ul>
        </div>
      </div>
      <Fragment>
        <HamburguerMenu
          id="hamburguer-button"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={state}
          onClick={handleOpen}
          className="d-md-none"
        />

        <OffCanvas
          isOpen={state}
          style={{
            /*  overlay: { display: "flex", justifyContent: "end" }, */
            content: { display: "flex", flexDirection: "column" },
          }}
          onClose={handleClose}
        >
          <CloseButton
            className="justify-content-end"
            id="close-button"
            onClick={handleClose}
          />

          <Navigation />
        </OffCanvas>
      </Fragment>
    </div>
  );
}

export default Navbar;
