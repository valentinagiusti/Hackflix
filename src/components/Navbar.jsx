import React, { useEffect, useState } from "react";
import { ReactComponent as HackflixLogo } from "../img/HACKFLIX.svg";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";

function Navbar() {
  const [show, setShow] = useState(false);

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
                to="/about-us"
              >
                About Us
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
      <div className="d-md-none">
        <Menu>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
