import React, { useRef } from "react";
import { HiMenu } from "react-icons/hi";
const Navbar = () => {
  const collapseBtnContainer = useRef(null);
  const navLinksContainer = useRef(null);
  const handleClick = () => {
    collapseBtnContainer.current.classList.add("collapsed");
    navLinksContainer.current.classList.remove("show");
  };
  return (
    <div
      className="navbar navbar-expand-md
    "
    >
      <div className="container">
        <a href="#" className="navbar-brand light-text">
          SIMON
        </a>
        <button
          className="navbar-toggler btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          arial-controls="navbarNav"
          arial-expanded="false"
          arial-label="Toggle navigation"
          ref={collapseBtnContainer}
        >
          <span className="nav-toggler-icon special">
            <HiMenu />
          </span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={navLinksContainer}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#home"
                className="nav-link special-text"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link special-text"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className="nav-link special-text"
                onClick={handleClick}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link special-text"
                onClick={handleClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
