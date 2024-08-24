import React from "react";
import styles from "../Home.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.ProcessPage}>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h3 className="amsterdam">1. Post a Request</h3>
          <p className="moderustic">
            Submit a delivery request with all necessary details.
          </p>
        </div>
        <div className={styles.step}>
          <h3 className="amsterdam">2. Driver Acceptance</h3>
          <p className="moderustic">
            Truck drivers can view and accept the delivery request.
          </p>
        </div>
        <div className={styles.step}>
          <h3 className="amsterdam">3. Parcel Pickup</h3>
          <p className="moderustic">
            The driver picks up the parcel from the specified location.
          </p>
        </div>
        <div className={styles.step}>
          <h3 className="amsterdam">4. Delivery</h3>
          <p className="moderustic">
            The driver delivers the parcel to the destination.
          </p>
        </div>
      </div>
    </section>
  );
}
