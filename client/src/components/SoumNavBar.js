import React from 'react'
import '../styles/SoumNavBar.css'
import logo from '../images/logo1.gif'
import { NavLink } from "react-router-dom";
const SoumNavBar = () => {
  return (
    <>
        <nav className="navbar navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} height="55px" width="55px" alt="logo" /> Adip Cochlear Implant
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link2"
                  }
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link2"
                  }
                  to="/SoumTheme"
                >
                  Theme
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "menu_active" : "nav-link2"
                  }
                  to="/SoumLogins"
                >
                  Logins
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default SoumNavBar