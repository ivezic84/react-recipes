import React from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="collapse navbar-collapse show ml-sm-5">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
