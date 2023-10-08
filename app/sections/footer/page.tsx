import styles from "./page.module.css"

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <div className={styles.main}>
      Copyright © {currentYear} KoDe. All Rights Reserved.
    </div>
  );
}

export default Footer