import React from "react";
import styles from "./Login.module.css";
import InputField from "../GeneralComponents/InputField";
import $ from "jquery";

export default function Login() {
  function showRegister() {
    $(`#LoginPage`).hide();
    $(`#RegisterPage`).show();
  }

  function showLogin() {
    $(`#LoginPage`).show();
    $(`#RegisterPage`).hide();
  }

  $("nav").hide();

  return (
    <>
      <div
        className={styles.container}
        id="LoginPage"
        style={{ display: "none" }}
      >
        <div className={styles.logFormDiv}>
          <form>
            <h1 className="amsterdam">Login</h1>
            <InputField name="email" title="Email" type="email" />
            <InputField name="password" title="Password" type="password" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.oAuthDiv}>
          <h1 className="amsterdam">Use Other Methods</h1>
          <button onClick={showRegister}>Register</button>
        </div>
      </div>
      <div className={styles.container} id="RegisterPage">
        <div className={styles.RegFormDiv}>
          <form>
            <h1 className="amsterdam">Register</h1>
            <InputField name="email" title="Email" type="email" />
            <InputField name="name" title="Name" />
            <InputField name="password" title="Password" type="password" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.oAuthDiv}>
          <h1 className="amsterdam">Use Other Methods</h1>
          <button onClick={showLogin}>Login</button>
        </div>
      </div>
    </>
  );
}
