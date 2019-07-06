import React, { Component } from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, navbarTitle }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} aria-hidden="true" />
        {navbarTitle}
      </h1>
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
