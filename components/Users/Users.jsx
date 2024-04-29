"use client";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error(
            `Failed to fetch users: ${response.status} - ${response.statusText}`
          );
        } else {
          const data = await response.json();
          setUsers(data.users);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // The empty dependency array ensures this effect runs only once

  function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthDate.getFullYear();
    return age;
  }

  const handleSortByAge = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      const ageA = calculateAge(a.birthday);
      const ageB = calculateAge(b.birthday);
      const comparison = ageA - ageB;

      // Toggle the order based on the current state
      return isAscending ? comparison : -comparison;
    });

    // Toggle the sorting order for the next click
    setIsAscending(!isAscending);
    setUsers(sortedUsers);
  };

  const handleSortByCountry = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      const countryA = a.country;
      const countryB = b.country;

      // Use localeCompare for string comparison (case-insensitive)
      return isAscending
        ? countryA.localeCompare(countryB)
        : countryB.localeCompare(countryA);
    });

    // Toggle the sorting order for the next click
    setIsAscending(!isAscending);
    setUsers(sortedUsers);
  };

  const handleSortByEducation = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      const educationA = a.education;
      const educationB = b.education;
      return isAscending
        ? educationA.localeCompare(educationB)
        : educationB.localeCompare(educationA);
    });
    setIsAscending(!isAscending);
    setUsers(sortedUsers);
  };

  return (
    <div className={styles.main}>
      <section className={styles.navbar}>
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
          <LogoutLink>Log out</LogoutLink>
        </div>
      </section>
      <div className={styles.content}>
        <h2>Users</h2>
        <div className={styles.layout}>
          <section className={styles.users}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className={styles.userContainer}>
                {users.map((user, index) => (
                  <div key={index} className={styles.user}>
                    <div>{user.profilePhoto}</div>
                    <div>
                      {user.firstName} {user.lastName} Age:{" "}
                      {calculateAge(user.birthday)}
                    </div>
                    <div>Birthday: {user.birthday}</div>
                    <div>{user.country}</div>
                    <div>{user.education}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
          <section className={styles.rightMenu}>
            <aside>
              <h3>Select Candidates By</h3>
              <div className={styles.selectBtn}>
                <button className={styles.ageBtn} onClick={handleSortByAge}>
                  Age
                </button>
                <button
                  className={styles.countryBtn}
                  onClick={handleSortByCountry}
                >
                  Country
                </button>
                <button
                  className={styles.educationBtn}
                  onClick={handleSortByEducation}
                >
                  Education
                </button>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
};
