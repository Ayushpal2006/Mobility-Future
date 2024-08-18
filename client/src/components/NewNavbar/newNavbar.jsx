import React from "react";
import styles from "./NewNavbar.module.css";
import $ from "jquery";
import { Link } from "react-router-dom";

export default function newNavbar() {
  function handleUl() {
    $("ul").toggle();
  }

  $(window).on("resize", function () {
    if ($(window).width() > 990) {
      $("ul").show();
    }
  });

  return (
    <nav className={styles.nav}>
      <ul>
        <li id={styles.logoCont}>
          <img
            alt="logo"
            src="./images/TH_new.png"
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
          <button id={styles.logBut}>Login</button>
        </div>
      </ul>
      <button style={{ display: "none" }} id={styles.DD} onClick={handleUl}>
        <img alt="DD" />
      </button>
    </nav>
  );
}
