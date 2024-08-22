import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    $("nav").hide();
    return () => {
      $("nav").show();
    };
  }, []);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;

  const validateForm = () => {
    let validationErrors = {};

    // Email validation
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    // Password validation
    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.text();

      console.log(formData);

      console.log(result);
    }
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
          <form onSubmit={handleSubmit}>
            <h1 className="amsterdam">Login</h1>

            {/* <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div> */}

            <InputField title="Email" name="email" type="email" />

            {/* <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div> */}
            <InputField title="Password" name="password" type="password" />

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
            <InputField name="name" title="Name" />
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
