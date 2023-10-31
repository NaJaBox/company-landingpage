"use client";
import styles from "./page.module.css";
import React, { useState } from "react";
import defaultPhoto from "../../public/user.png";
import Image from "next/image";

const OnlineApplication = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  // const [birthday, setBirthday] = useState<Date | null>(null);

  const [country, setCountry] = useState("");
  const [education, setEducation] = useState("");
  const [userPhoto, setUserPhoto] = useState(defaultPhoto);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const e = event;
    e.preventDefault();
    try {
      console.log("Before fetch");
      const formData = {
        firstName,
        lastName,
        mobileNumber,
        email,
        address,
        birthday,
        country,
        education,
      };
      console.log(formData);
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      console.log("After fetch");

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const birthdayDate = new Date(birthday);
  // const birthYear = birthdayDate.getFullYear();
  const currentYear = new Date().getFullYear();
  const age = birthday ? currentYear - new Date(birthday).getFullYear() : "";

  const handleUpload = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const selectedFile = selectedFiles[0];
      console.log("Selected files:", selectedFiles);
      // setUserPhoto(URL.createObjectURL(selectedFile) as StaticImageData);
    }
  };

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
          <div className={styles.userPhoto}>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
            <Image
              src={userPhoto}
              alt="user photo"
              width={100}
              height={100}
              placeholder="blur"
              className={styles.userPhotoUp}
              onClick={handleUpload}
            />
          </div>
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
                    autoComplete="given-name"
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
                    autoComplete="family-name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <span>Last Name</span>
                </div>
              </div>

              <div className={styles.inputBday}>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  required={true}
                  value={birthday}
                  autoComplete="off"
                  onChange={(e) => setBirthday(e.target.value)}
                />
                <span className={styles.bDay}>Birthday</span>
              </div>
              <br />

              <div className={styles.inputContainer}>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  required={true}
                  value={mobileNumber}
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.rightSide}></div>
      </section>
    </main>
  );
};

export default OnlineApplication;
