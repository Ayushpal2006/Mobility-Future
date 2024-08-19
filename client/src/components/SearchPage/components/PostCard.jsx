import React from "react";
import styles from "../SearchPage.module.css";

export default function PostCard(props) {
  async function assignDriver() {}
  return (
    <div className={styles.postCardContainer}>
      <h2 className="amsterdam">Post Card</h2>
      <h5>
        Name: <span>{props.data.cust_name}</span>
      </h5>
      <h5>
        From City: <span>{props.data.from_city}</span>
      </h5>
      <h5>
        Cargo Weight: <span>{props.data.cargo_weight}</span>
      </h5>
      <h5>
        Fare: <span>{props.data.fare}</span>
      </h5>
      <button onClick={assignDriver}>Apply</button>
    </div>
  );
}
