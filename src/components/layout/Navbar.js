import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, navbarTitle }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} aria-hidden="true" />
        {navbarTitle}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: "fa fa-github-alt",
  navbarTitle: "Github Finder"
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  navbarTitle: PropTypes.string.isRequired
};

export default Navbar;
