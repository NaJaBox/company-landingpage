import styles from "./page.module.css";

const userRecruitment = () => {
  return (
    <section className={styles.main}>
      <div className={styles.leftSide}>
        <h2>Steps of Recruitment</h2>
        <div className={styles.steps}>
          <span>1</span>
          <p>Send your application</p>
        </div>
        <div className={styles.steps}>
          <span>2</span>
          <p>In a short time we will contact you and appoint a meeting</p>
        </div>
        <div className={styles.steps}>
          <span>3</span>
          <p>
            We will have a video meeting to get to know each other and complete
            your profile in order to find the most suitable job position for you
          </p>
        </div>
        <div className={styles.steps}>
          <span>4</span>
          <p>Start packing! Your dream job awaits for you!</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <h2>Take the pole position</h2>
        <div className={styles.btnBox}>
          <a href="#home">
            <button className={styles.applyBtn}>APPLY TODAY</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default userRecruitment;
