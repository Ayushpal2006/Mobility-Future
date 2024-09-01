import React, { useEffect } from "react";
import styles from "./NewNavbar.module.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import logo from "../../images/TH.png";

export default function NewNavbar() {
  function handleUl() {
    $(`.${styles.nav} ul`).toggle();
  }

  $(window).on("resize", function () {
    if ($(window).width() > 990) {
      $(`.${styles.nav} ul`).show();
    }
  });

  useEffect(() => {
    if ($(window).width() <= 990) {
      $(`.${styles.nav} ul`).hide();
    }
  }, []);

  return (
    <nav className={styles.nav}>
      <ul>
        <li id={styles.logoCont}>
          <img
            alt="logo"
            src={logo}
            style={{ width: "10vw", border: "solid yellow 1px" }}
          />
        </li>
        <li>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <button>Search Jobs</button>
          </Link>
        </li>
        <li>
          <Link to="/postJob">
            <button>Create a Job</button>
          </Link>
        </li>
        <li>
          <Link to="/contactUs">
            <button>Contact Us</button>
          </Link>
        </li>
        <li>
          <Link to="/aboutUs">
            <button>About Us</button>
          </Link>
        </li>
        <div>
          <Link to="/Account">
            <button id={styles.logBut}>Profile</button>
          </Link>
        </div>
      </ul>
      <button style={{ display: "none" }} id={styles.DD} onClick={handleUl}>
        <img alt="DD" />
      </button>
    </nav>
  );
}
