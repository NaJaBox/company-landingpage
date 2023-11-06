"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Form.module.css";
import Modal from "react-modal";

Modal.setAppElement("#main");
const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const e = event;
    e.preventDefault();
    console.log({ firstName, mobileNumber });
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
     const selectedFiles = event.target.files;
     if (selectedFiles && selectedFiles.length > 0) {
       setSelectedFile(selectedFiles[0]);
     }
  };

  const handleCvSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const e = event;
    e.preventDefault();
    try {
      const formData = {
        firstName,
        mobileNumber,
      };
      console.log(formData);
      const response = await fetch("/api/userCV", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
        // router.push("/pages/UsersDatabase");
        router.refresh();
        closeModal();
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.formContainer} id="main">
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputArea}>
          <h6>We will call you as soon as we know your</h6>
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
          {/* <br /> */}
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

        {/* <br /> */}
        <button className={styles.callMe} type="submit">
          Call Me
        </button>
        <div>
          <h6>or you can just</h6>
          <button className={styles.submitCVBtn} onClick={openModal}>
            Submit CV
          </button>
          <Modal className={styles.modal} isOpen={isModalOpen}>
            <form className={styles.modalForm} onSubmit={handleCvSubmit}>
              <div className={styles.modalInput}>
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
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    required={true}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <span>Mobile</span>
                </div>
                <div className={styles.sendCV}>
                  <h5>Submit your CV</h5>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                  <button
                    id="browseButton"
                    className={styles.submitCV}
                    onClick={handleButtonClick}
                  >
                    Browse
                  </button>
                </div>
                  <div id="selectedFileName" className={styles.fileName}>
                    {selectedFile ? selectedFile.name : "No file selected"}
                  </div>
              </div>
              <button className={styles.submitCVBtn} type="submit">
                Submit
              </button>
            </form>
          </Modal>
        </div>
        <div>
          <h6>OR</h6>
          <button
            className={styles.fillForm}
            type="button"
            onClick={() => router.push("/pages/UserProfileSetup")}
          >
            Fill out this form
          </button>
        </div>
        <div className={styles.formMsg}>
          <h4>Everyone is IMPORTANT to us</h4>
          <h5>We will contact you as soon is possible</h5>
        </div>
      </form>
    </div>
  );
};

export default Form;
