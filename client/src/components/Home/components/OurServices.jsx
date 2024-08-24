import React from "react";
import styles from "../Home.module.css";

export default function OurServices() {
  return (
    <section className={styles.serviceContainer}>
      <div className={styles.serviceDiv}>
        <div className={styles.service}>
          <h3 className="amsterdam">Parcel Delivery</h3>
          <p className="moderustic">
            Fast and secure parcel delivery service across various locations.
          </p>
        </div>
        <div className={styles.service}>
          <h3 className="amsterdam">Real-Time Tracking</h3>
          <p className="moderustic">
            Track your parcel in real-time from pickup to delivery.
          </p>
        </div>
        <div className={styles.service}>
          <h3 className="amsterdam">Insurance</h3>
          <p className="moderustic">
            Comprehensive insurance coverage for your parcels.
          </p>
        </div>
      </div>
    </section>
  );
}
