import React from "react";
import styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <span>
      <div className={StyleSheet.container}>
        <div className={styles.loadingspinner}>
          <div id={styles.square1}></div>
          <div id={styles.square2}></div>
          <div id={styles.square3}></div>
          <div id={styles.square4}></div>
          <div id={styles.square5}></div>
        </div>
      </div>
    </span>
  );
}
