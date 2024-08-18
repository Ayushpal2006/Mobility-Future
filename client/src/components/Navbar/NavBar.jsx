import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary moderustic"
      id={styles.navId}
    >
      <div className="container-fluid">
        <Link to="/home">
          <a
            className="navbar-brand text-decoration-none"
            id={styles.navbarMargin}
          >
            Navbar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/postJob">
              <li
                className="nav-item"
                style={{ textDecoration: "none !important" }}
              >
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ textDecoration: "underline !important" }}
                >
                  Create a Job
                </a>
              </li>
            </Link>
            <Link to="/search">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Search
                </a>
              </li>
            </Link>
          </ul>
          <button className={styles.loginButton}>LogIn</button>
        </div>
      </div>
    </nav>
  );
}
