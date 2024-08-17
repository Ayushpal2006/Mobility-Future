import React from "react";
//import './clientpro.css'
import styles from './clientpro.module.css'
import { useState } from "react";
const profileimg  = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"



function Profile() {
    return (
        <>
        <div className={styles.procast}>

            <div className={styles.user}>
            <span><img src={profileimg} alt="loading"  /></span>
                rohit sharma</div>
            <p className="cid">`Client id = ${Math.floor(10000000*Math.random())}`</p>
            <div className="middle">

                <div className={styles.user_id}>
                    <label htmlFor="userName">userName</label>
                    setuserName</div>

                <div className={styles.mail}>
                    <label htmlFor="Email">Email</label>
                    setemail</div>

                <div className={styles.cargo}>
                    <label htmlFor="cargo">cargo</label>
                    setTypeofCargo</div>

                <div className={styles.resident}>
                    <label htmlFor="resident">resident</label>
                    setplace</div>

                <div className={styles.Cadd}>
                    <label htmlFor="Comp.Address">Comp.Address</label>
                    setcompleteAdd</div>

            </div>
            <div className={styles.middle2}>

            </div>


        </div>

        </>
    )
}
export default Profile