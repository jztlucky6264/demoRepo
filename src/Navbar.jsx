import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Arvind Yadav
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded={!isNavCollapsed ? true : false}
                  aria-label="Toggle navigation"
                  onClick={handleNavCollapse}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`${
                    isNavCollapsed ? "collapse" : ""
                  } navbar-collapse`}
                  id="navbarTogglerDemo02"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                        onClick={handleNavCollapse}
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/team"
                        onClick={handleNavCollapse}
                      >
                        Team
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
