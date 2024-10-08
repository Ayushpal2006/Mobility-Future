import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import InputField from "../GeneralComponents/InputField";
import $ from "jquery";
import Cookies from "js-cookie";

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

  const navigate = useNavigate();

  const [loginformData, setFormData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    role: "",
    name: "",
    model: "",
    company: "",
    Address: "",
    Address_two: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginformData),
      }
    );
    const result = await response.json();
    if (result.success) {
      Cookies.set("id", result.user._id);
      navigate("/home");
    } else {
      alert(result.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      }
    );
    const result = await response.json();
    console.log(result);
    if (result.user) {
      navigate("/");
    } else {
      alert(result.message);
    }

    showLogin();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
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
            <InputField
              name="email"
              title="Email"
              type="email"
              value={registerData.email}
              onChange={handleChangeRegister}
            />
            <InputField
              name="role"
              title="Role"
              value={registerData.role}
              onChange={handleChangeRegister}
            />
            <InputField
              name="password"
              title="Password"
              type="password"
              value={registerData.password}
              onChange={handleChangeRegister}
            />
            <button type="button" onClick={showDetCont}>
              Next
            </button>
          </form>
        </div>
        <div className={styles.oAuthDiv} id={styles.oAuthDivReg}>
          <h1 className="amsterdam">Use Other Methods</h1>
          <button onClick={showLogin}>Login</button>
        </div>
      </div>
      <div
        className={styles.detContainer}
        id="takeDetailsPage"
        style={{ display: "none" }}
      >
        <form onSubmit={handleRegister}>
          <h1 className="amsterdam">Add More Details</h1>
          <InputField
            name="name"
            title="Name"
            value={registerData.name}
            onChange={handleChangeRegister}
          />
          {$("input[name='role']") === "Driver" ? (
            <InputField
              name="model"
              title="Car Model"
              value={registerData.model}
              onChange={handleChangeRegister}
            />
          ) : (
            <InputField
              name="company"
              title="Company/Personal"
              value={registerData.company}
              onChange={handleChangeRegister}
            />
          )}
          <div className="form-floating">
            <textarea
              name="Address"
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{}}
              value={registerData.Address}
              onChange={handleChangeRegister}
            ></textarea>
            <label htmlFor="floatingTextarea2">Address part - 1</label>
          </div>
          <div className="form-floating">
            <textarea
              name="Address_two"
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{}}
              value={registerData.Address_two}
              onChange={handleChangeRegister}
            ></textarea>
            <label htmlFor="floatingTextarea2">Address part - 2</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
