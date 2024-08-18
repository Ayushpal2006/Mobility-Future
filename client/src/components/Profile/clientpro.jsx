import React from "react";
import styles from "./clientpro.module.css";
const profileimg =
  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png";

function Profile() {
  return (
    <>
      <div className={styles.procast}>
        <div className={`${styles.user} amsterdam`}>
          <span>
            <img src={profileimg} alt="loading" />
          </span>
          <h1>Rohit Sharma</h1>
        </div>
        <div className={`moderustic ${styles.detailDiv}`}>
          <div className="middle">
            <div className={styles.user_id}>
              <label htmlFor="userName">
                <h2>userName</h2>
              </label>
              <h5>setuserName</h5>
            </div>
            <hr />
            <div className={styles.mail}>
              <label htmlFor="Email">
                <h2>Email</h2>
              </label>
              <h5>setemail</h5>
            </div>
            <hr />
            <div className={styles.cargo}>
              <label htmlFor="cargo">
                <h2>cargo</h2>
              </label>
              <h5>setTypeofCargo</h5>
            </div>
            <hr />
            <div className={styles.resident}>
              <label htmlFor="resident">
                <h2>resident</h2>
              </label>
              <h5>setplace</h5>
            </div>
            <hr />
            <div className={styles.Cadd}>
              <label htmlFor="Comp.Address">
                <h2>Comp.Address</h2>
              </label>
              <h5>setcompleteAdd</h5>
            </div>
          </div>
          <div className={styles.middle2}></div>
        </div>
      </div>
    </>
  );
}
export default Profile;
