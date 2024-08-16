import React from "react";
import styles from "../PostPage.module.css";
import InputField from "../../GeneralComponents/InputField";

export default function JobForm() {
  return (
    <div className={styles.formContainer}>
      <form>
        <h1>Create A Post</h1>
        <InputField title="Email" name="Email" type="email" styleId="" />
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
      </form>
    </div>
  );
}
