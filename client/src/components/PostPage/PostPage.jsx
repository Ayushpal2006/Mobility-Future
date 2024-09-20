import React, { useEffect } from "react";
import styles from "./PostPage.module.css";
import $ from "jquery";
import JobForm from "./JobForm/JobForm";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function PostPage() {
  function popUp() {
    $(`#bgDiv`).css("z-index", "4");
    $(`#popUpDiv`).css({ transform: "translateY(-83.5vh)", "z-index": "5" });
    $("#popUpBut").hide();
    $("#popDownBut").show();
  }

  function popDown() {
    $(`#bgDiv`).css("z-index", "-100");
    $(`#popUpDiv`).css({ transform: "translateY(0)" });
    $("#popDownBut").hide();
    $("#popUpBut").show();
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("id")) {
      navigate("/");
    }
  });

  return (
    <div className={styles.wholePage}>
      <div className={styles.container}>
        <h1 className="amsterdam">Creating a Job</h1>
        <div className={`${styles.detContainer} moderustic`}>
          <p>
            At the heart of our business lies a simple but powerful idea:
            connecting customers with the right truck drivers to move their
            goods across state lines. By doing this, we're not just transporting
            packages—we’re driving change. Our platform not only makes
            interstate logistics easy for customers but also creates a network
            of job opportunities for truck drivers across the country. Every
            delivery is a step toward empowering truckers, boosting local
            economies, and keeping America’s goods moving forward. Through
            technology, we're unlocking new ways for drivers to work
            independently, earn more, and thrive in a flexible environment
            tailored to their skills and schedules.
          </p>
          <div>
            <h3 className="amsterdam">Points to remember:-</h3>
            <ol>
              <li>
                <apan>Accurate Dimensions & Weight</apan>: Measure the length,
                width, height, and weight of your package precisely to avoid
                extra charges or delays.
              </li>
              <li>
                <apan>Fragility & Special Handling</apan>: Clearly state if the
                package is fragile or requires special handling (e.g.,
                temperature control, oversized items).
              </li>
              <li>
                <apan>Pickup & Delivery Locations</apan>: Provide exact
                addresses for both the pickup and delivery points, including any
                special instructions (gates, access codes, etc.).
              </li>
              <li>
                <apan>Contents Declaration</apan>: Describe the contents of the
                package accurately. Avoid shipping prohibited or restricted
                items.
              </li>
              <li>
                Contact Information*: Ensure your contact details are correct
                for both the sender and recipient in case of any issues during
                transport.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.popUpDiv} id="popUpDiv">
        <button className={styles.popUpButton} onClick={popUp} id="popUpBut">
          <h2 className="amsterdam">Create a Job</h2>
        </button>
        <button
          className={styles.popUpButton}
          style={{ display: "none" }}
          onClick={popDown}
          id="popDownBut"
        >
          <h2 className="amsterdam">Collapse</h2>
        </button>
        <JobForm func={popDown} />
      </div>
      <div className={styles.bgDiv} id="bgDiv"></div>
    </div>
  );
}
