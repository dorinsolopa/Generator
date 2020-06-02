import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const { pages } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
          <ul className="navbar-nav ">
            {pages.map((item) => {
              return (
                <li>
                  <NavLink className="nav-link " to={item.path}>
                    {item.linkTitle}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
