import React, { useState } from "react";
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

  function showDetCont() {
    $(`#takeDetailsPage`).show();
    $(`#RegisterPage`).hide();
    $(`#LoginPage`).hide();
  }

  const [loginformData, setFormData] = useState({ email: "", password: "" });

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginformData),
      }
    );
    const result = await response.text();
    console.log(result);

    console.log(loginformData)

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={styles.container} id="LoginPage">
        <div className={styles.logFormDiv}>


          <form onSubmit={handleSubmitLogin}>
            <h1 className="amsterdam">Login</h1>


            <InputField
              title="Email"
              name="email"
              type="email"
              value={loginformData.email}
              onChange={handleChange}
            />

            <InputField
              title="Password"
              name="password"
              type="password"
              value={loginformData.password}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.oAuthDiv} id={styles.oAuthDivLog}>
          <h1 className="amsterdam" style={{ color: "black" }}>
            Use Other Methods
          </h1>
          <button onClick={showRegister}>Register</button>
          <button onClick={showDetCont}>Move Forward</button>
        </div>
      </div>
      <div
        className={styles.container}
        id="RegisterPage"
        style={{ display: "none" }}
      >
        <div className={styles.RegFormDiv}>
          <form>
            <h1 className="amsterdam">Register</h1>
            <InputField name="email" title="Email" type="email" />
            <InputField name="role" title="Role" />
            <InputField name="password" title="Password" type="password" />
            <button type="submit">Next</button>
          </form>
        </div>
        <div className={styles.oAuthDiv} id={styles.oAuthDivReg}>
          <h1 className="amsterdam">Use Other Methods</h1>
          <button onClick={showLogin}>Login</button>
          <button onClick={showDetCont}>Move Forward</button>
        </div>
      </div>
      <div
        className={styles.detContainer}
        id="takeDetailsPage"
        style={{ display: "none" }}
      >
        <form>
          <h1 className="amsterdam">Add More Details</h1>
          <InputField name="name" title="Name" />
          {$("input[name='role']") === "Driver" ? (
            <InputField name="model" title="Car Model" />
          ) : (
            <InputField name="company" title="Company/Personal" />
          )}
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{}}
              
            ></textarea>
            <label for="floatingTextarea2">Address part - 1</label>
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{}}
            ></textarea>
            <label for="floatingTextarea2">Address part - 2</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
