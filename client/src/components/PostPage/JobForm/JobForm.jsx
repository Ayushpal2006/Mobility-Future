import React from "react";
import styles from "../PostPage.module.css";
import InputField from "../../GeneralComponents/InputField";
import $ from "jquery";
import axios from "axios";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

export default function JobForm(props) {
  async function postForm(e) {
    e.preventDefault();
    $("#submitButtonJobForm").text("");
    $("#loaderJobForm").css("display", "inline-block");

    const email = $("input[name='email']").val();
    const cust_name = $("input[name='cust_name']").val();
    const cust_contact = $("input[name='cust_contact']").val();
    const from_city = $("input[name='from_city']").val();
    const from_addr = $("input[name='from_addr']").val();
    const to_city = $("input[name='to_city']").val();
    const to_addr = $("input[name='to_addr']").val();
    const cargo_name = $("input[name='cargo_name']").val();
    const cargo_weight = $("input[name='cargo_weight']").val();
    const fare = $("input[name='fare']").val();

    const data = {
      email: email,
      cust_name: cust_name,
      cust_contact: cust_contact,
      from_city: from_city,
      from_addr: from_addr,
      to_city: to_city,
      to_addr: to_addr,
      cargo_name: cargo_name,
      cargo_weight: cargo_weight,
      fare: fare,
    };

    await axios.post(`${process.env.REACT_APP_BASE_URL}api/postJob`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    $("#submitButtonJobForm").text("Created");
    props.func();
    $("#submitButtonJobForm").text("Submit");
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={postForm}>
        <h1 className="amsterdam">Create A Post</h1>
        <InputField title="Email" name="email" type="email" styleId="" />
        <InputField title="Name" name="cust_name" styleId="" />
        <InputField title="Contact" name="cust_contact" />
        <InputField title="From City {DD}" name="from_city" styleId="" />
        <InputField
          title="From Addr"
          name="from_addr"
          styleId={`${styles.span2}`}
        />
        <InputField title="To City" name="to_city" styleId="" />
        <InputField
          title="To Addr"
          name="to_addr"
          styleId={`${styles.span2}`}
        />
        <InputField title="Cargo Name" name="cargo_name" styleId="" />
        <InputField title="Cargo Weight" name="cargo_weight" />
        <div></div>
        <InputField title="Fare" name="fare" styleId="" />
        <div></div>
        <div></div>
        <div></div>
        <div className={styles.submitCont}>
          <button type="submit" id="submitButtonJobForm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
