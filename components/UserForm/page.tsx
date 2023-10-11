"use client";
import styles from "./page.module.css";
import React, { useState } from "react";

const OnlineApplication = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("")
  const [country, setCountry] = useState("")
  const [education, setEducation] = useState("")

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const e = event;
    e.preventDefault();
    console.log({ firstName, mobileNumber });
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const age = {birthday} - currentYear

  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <a href="#home">
          <div className={styles.acmeLogo}>
            <div className={styles.logoTxt}>
              <h4>ACME</h4>
              <h6>GRUPPE</h6>
            </div>
          </div>
        </a>
        <div className={styles.links}>
          <a href="/">Home</a>
          <a href="#">Login</a>
        </div>
      </div>
      <section className={styles.onlineForm}>
        <div className={styles.leftSide}>
          <div className={styles.userPhoto}></div>
          <div className={styles.userName}>
            {lastName} {firstName}
          </div>
          <div className={styles.userAge}>{age}</div>
          <div className={styles.userEmail}>{email}</div>
          <div className={styles.userMobile}>{mobileNumber}</div>
        </div>
        <div className={styles.midSide}>
          <form className={styles.form} method="post" onSubmit={onSubmit}>
            <div className={styles.inputArea}>
              <h2>Profile Setup</h2>
              <div className={styles.name}>
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
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required={true}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <span>Last Name</span>
                </div>
              </div>

              <div className={styles.inputContainer}>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  required={true}
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
                <span>Birthday</span>
              </div>
              <br />

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
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="address"
                  id="address"
                  name="address"
                  required={true}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <span>City & Zip</span>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="country"
                  id="country"
                  name="country"
                  required={true}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <span>Country</span>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="education"
                  id="education"
                  name="education"
                  required={true}
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
                <span>Education</span>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.rightSide}></div>
      </section>
    </main>
  );
};

export default OnlineApplication;
