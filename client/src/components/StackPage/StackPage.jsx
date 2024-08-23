import React from "react";
import styles from "./StackPage.module.css";

export default function StackPage() {
  return (
    <div className={styles.container}>
      <h1 className="amsterdam">Stack Page</h1>
      <hr />
      <div>
        <div className={styles.stackDiv}>
          <h1 className="amsterdam">Stack</h1>
          <ul>
            <li className="moderustic">JavaScript</li>
            <li className="moderustic">HTML5 / CSS3</li>
            <li className="moderustic">ExpressJS</li>
            <li className="moderustic">ReactJS</li>
            <li className="moderustic">NodeJS</li>
            <li className="moderustic">MongoDB</li>
          </ul>
        </div>
        <div className={styles.dependencyDiv}>
          <h1 className="amsterdam">Dependencies</h1>
          <ul>
            <li className="moderustic">React Router DOM</li>
            <li className="moderustic">Axios</li>
            <li className="moderustic">jQuery</li>
            <li className="moderustic">Body Parser</li>
            <li className="moderustic">DotEnv</li>
            <li className="moderustic">BCrypt</li>
            <li className="moderustic">Passport</li>
            <li className="moderustic">JS Cookie</li>
            <li className="moderustic">Cookie Parser</li>
            <li className="moderustic">JSON Web Token</li>
            <li className="moderustic">CORS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
