import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    icon: "fa fa-github-alt",
    navbarTitle: "Github Finder"
  };

  static propTypes = {
    icon: PropTypes.string.isRequired,
    navbarTitle: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} aria-hidden="true" />
          {this.props.navbarTitle}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
