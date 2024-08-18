import React from "react";
import styles from "./ContactUs.module.css";
import InputField from "../GeneralComponents/InputField";
import $ from "jquery";

export default function ContactUs() {
  function handleForm(e) {
    e.preventDefault();
    alert("Your Query has been sent!");
    $("input[name='contact_email']").val("");
    $("input[name='contact_name']").val("");
    $("textarea").val("");
    $("input[name='contact_subject']").val("");
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className="amsterdam">Contact Us</h1>
      </div>
      <div className={`${styles.formDiv} moderustic`}>
        <form>
          <InputField title="Name" name="contact_name" />
          <InputField title="Email" name="contact_email" />
          <InputField title="Subject" name="contact_subject" />
          <div className={`form-group ${styles.textDiv}`}>
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              cols="1000"
              placeholder="Write your query"
            ></textarea>
          </div>
          <button onClick={handleForm}>Submit</button>
        </form>
      </div>
    </div>
  );
}
