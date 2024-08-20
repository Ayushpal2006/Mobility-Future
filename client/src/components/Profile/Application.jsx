import styles from "./clientpro.module.css";
import React from "react";
// import data from "./data.json";

function Application(props) {
  return (
    <div className={styles.Application}>
      <div className={styles.connection}>
        <label htmlFor="UserName">UserName</label>
        <h2>props.data.client</h2>

        <label htmlFor="">UserName-2</label>
        <h2>props.data.Owner</h2>
      </div>

      <div className={styles.location}>
        <label htmlFor="">client location</label>
        <h3>props.data.client.location</h3>
        <label htmlFor="">onwer location</label>
        <h3>props.data.Owner.location</h3>
      </div>
      <div className={styles.money}>
        <p>Price: props.data.price</p>
      </div>
    </div>
  );
}

export default Application;
