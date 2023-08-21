"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const e = event;
    e.preventDefault();
    console.log({ firstName, mobileNumber });
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h6>We will call you as soon as we know your</h6>
        <div className={styles.inputArea}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required={true}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span>First Name</span>
          </div>
          <br />
          <h6>and your</h6>
          <div className={styles.inputContainer}>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              required={true}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <span>Mobile</span>
          </div>
        </div>

        <br />
        <button className={styles.callMe} type="submit">
          Call Me
        </button>
        <h6>or you can just</h6>
        <div className={styles.sendCV}>
          <h5>Submit your CV</h5>
          <button className={styles.submitCV} type="submit">
            Browse
          </button>
        </div>
        <h6>OR</h6>
        <button className={styles.fillForm} type="submit">
          Fill out this form
        </button>
        <div className={styles.formMsg}>
          <h4>Everyone is IMPORTANT to us</h4>
          <h5>We will contact you as soon is possible</h5>
        </div>
      </form>
    </div>
  );
};

export default Form;
