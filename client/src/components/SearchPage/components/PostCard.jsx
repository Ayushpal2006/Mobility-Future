import React from "react";
import styles from "../SearchPage.module.css";

export default function PostCard() {
  return (
    <div className={styles.postCardContainer}>
      <h3 className="amsterdam">Post Card</h3>
      <h5>
        Name: <span>{"{name}"}</span>
      </h5>
      <h5>
        From City: <span>{"{from_city}"}</span>
      </h5>
      <h5>
        Cargo Weight: <span>{"{cargo_weight}"}</span>
      </h5>
      <h5>
        Fare: <span>{"{fare}"}</span>
      </h5>
      <button>Apply</button>
    </div>
  );
}
