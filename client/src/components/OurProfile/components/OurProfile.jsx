import React from "react";
import styles from "../OurProfile.module.css";
import github_logo from "../../../images/github.png";
import leetcode_logo from "../../../images/leetcode.png";
import linkedin_logo from "../../../images/linkedin.png";
import resume_logo from "../../../images/resume.png";
import profile from "../../../images/profile.png";

export default function OurProfile(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <div className={styles.imgCont}>
        <img alt="profile picture" src={profile} id={styles.profilePic} />
      </div>
      <div className={styles.nameCont}>
        <h1
          className="amsterdam"
          style={{ textAlign: "center", marginTop: "4vh" }}
        >
          {props.data ? props.data.name : "Loading..."}
        </h1>
      </div>
      <div className={styles.logoCont}>
        <ol className={styles.logoList}>
          <li>
            <a href={props.data ? props.data.github : "#"}>
              <img alt="github logo" src={github_logo} />
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.leetcode : "#"}>
              <img alt="leetcode logo" src={leetcode_logo} />
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.linkedin : "#"}>
              <img alt="linkedin logo" src={linkedin_logo} />
            </a>
          </li>
          <li>
            <a href={props.data ? props.data.resume : "#"}>
              <img alt="document icon" src={resume_logo} />
            </a>
          </li>
        </ol>
      </div>
      <div className={`moderustic ${styles.aboutCont}`}>
        {props.data && props.data.descr ? props.data.descr : "NA"}
      </div>
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
