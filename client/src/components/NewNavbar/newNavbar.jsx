import React from "react";
import styles from "./NewNavbar.module.css";
import $ from "jquery";

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
          <img alt="logo" />
        </li>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Search Jobs</button>
        </li>
        <li>
          <button>Create a Job</button>
        </li>
        <li>
          <button>Contact Us</button>
        </li>
        <li>
          <button>About Us</button>
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
