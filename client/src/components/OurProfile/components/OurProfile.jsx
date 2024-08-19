import React from "react";
import styles from "../OurProfile.module.css";

export default function OurProfile(props) {
  return (
    <div className={styles.container}>
      <div className={styles.imgCont}></div>
      <div className={styles.nameCont}></div>
      <div className={styles.logoCont}></div>
      <div className={styles.aboutCont}></div>
      {/* <h1 className="amsterdam">
        {props.data ? props.data.name : "loading..."}
      </h1>
      <div>
        <div>
          <h4 className="moderustic">
            {props.data ? props.data.gmail : "loading..."}
          </h4>
        </div>
        <div>
          <a href={props.data ? props.data.linkedin : "#"}>
            <h4 className="moderustic">
              {props.data ? props.data.linkedin : "loading..."}
            </h4>
          </a>
        </div>
        <div>
          <a href={props.data ? props.data.github : "#"}>
            <h4 className="moderustic">
              {props.data ? props.data.github : "loading..."}
            </h4>
          </a>
        </div>
        <div>
          <a href={props.data ? props.data.leetcode : "#"}>
            <h4 className="moderustic">
              {props.data ? props.data.leetcode : "loading..."}
            </h4>
          </a>
        </div>
        <div>
          <a href={props.data ? props.data.resume : "#"}>
            <h4 className="moderustic">
              {props.data ? props.data.resume : "loading..."}
            </h4>
          </a>
        </div>
      </div> */}
    </div>
  );
}
