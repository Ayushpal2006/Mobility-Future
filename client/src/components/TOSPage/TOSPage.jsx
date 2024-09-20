import React from "react";
import styles from "./TOSPage.module.css";

export default function TOSPage() {
  return (
    <div className={styles.container}>
      <h1 className="amsterdam">Terms of Services</h1>
      <p className="moderustic">
        When placing an order on our website, customers should provide detailed
        information about their package to ensure smooth transportation. Here
        are
        <br />
        <span className={`${styles.bold} ${styles.liHeading}`}>
          5 key points to remember:
        </span>
        <br />
        <br />
        <ul>
          <li>
            <span className={styles.bold}>Accurate Dimensions & Weight</span>:
            Measure the length, width, height, and weight of your package
            precisely to avoid extra charges or delays
          </li>
          <li>
            <span className={styles.bold}>Fragility & Special Handling</span>:
            Clearly state if the package is fragile or requires special handling
            (e.g., temperature control, oversized items)
          </li>
          <li>
            <span className={styles.bold}>Pickup & Delivery Locations</span>:
            Provide exact addresses for both the pickup and delivery points,
            including any special instructions (gates, access codes, etc.)
          </li>
          <li>
            <span className={styles.bold}>Contents Declaration</span>: Describe
            the contents of the package accurately. Avoid shipping prohibited or
            restricted items
          </li>
          <li>
            <span className={styles.bold}>Contact Information</span>: Ensure
            your contact details are correct for both the sender and recipient
            in case of any issues during transport
          </li>
        </ul>
      </p>
    </div>
  );
}
