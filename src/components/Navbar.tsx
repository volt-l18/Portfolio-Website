import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://drive.google.com/file/d/1sBxJl-QimcLUeIJJIzbAoG51pNgLCKG2/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/volt-l18"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/volt-l18?tab=repositories"
              target="_blank"
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Exit
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
