import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="pushmenu"
              to="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              to="#"
              role="button"
            >
              <i className="fas fa-th-large" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
