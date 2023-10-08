import styles from "./page.module.css";

const userBenefits = () => {
  return (
    <section className={styles.main}>
      <div className={styles.topMsg}>
        <div className={styles.line}></div>
        <div id="benefits" className={styles.topMsgTxt}>
          <h3>Your Benefits</h3>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardsBorder}>
          <div className={styles.card}>
            <div className={styles.cardImg1}></div>
            <div className={styles.cardTxt}>
              <h4>HIGH HOURLY WAGES</h4>
              <p>
                A few words about your product/offer. Focus on the benefits not
                the features. Explain how your product will improve your
                customer&#39;s life. Add a description of your offer and key
                benefits. What it is and how it helps your customer. A few words
                about your product/offer. Focus on the benefits not the
                features.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg2}></div>
            <div className={styles.cardTxt}>
              <h4>HIGHLY- VALUED BENEFITS</h4>
              <p>
                A few words about your product/offer. Focus on the benefits not
                the features. Explain how your product will improve your
                customer&#39;s life. Add a description of your offer and key
                benefits. What it is and how it helps your customer. A few words
                about your product/offer. Focus on the benefits not the
                features.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg3}></div>
            <div className={styles.cardTxt}>
              <h4>MANUFACTURING WORKERS ARE EDUCATED PROFESSIONALS</h4>
              <p>
                A few words about your product/offer. Focus on the benefits not
                the features. Explain how your product will improve your
                customer&#39;s life. Add a description of your offer and key
                benefits. What it is and how it helps your customer. A few words
                about your product/offer. Focus on the benefits not the
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomMsg}>
        <div id="offer" className={styles.bottomMsgTxt}>
          <h3>Our Offer</h3>
        </div>
        <div className={styles.line}></div>
      </div>
    </section>
  );
};

export default userBenefits;
