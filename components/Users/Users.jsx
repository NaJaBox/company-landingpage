"use client";
import styles from "./page.module.css"
import React, { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(
            `Failed to fetch users: ${response.status} - ${response.statusText}`
          );
        }
        const data = await response.json();
        setUsers(data.users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div>
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
      <h2>Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
