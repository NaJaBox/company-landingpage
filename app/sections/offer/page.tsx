import styles from "./page.module.css";

export default function OurOffer() {
  return (
    <section className={styles.main}>
      <div className={styles.offerBox}>
        <div className={styles.offerTxt}>
          <h2>We Offer You</h2>
          <h2>In This Position</h2>
          <ul className={styles.list}>
            <li>
              <p>
                <span>Opportunity in a Global Setting: </span>Embark on a role
                within an international environment that offers potential for
                honing your professional skills.
              </p>
            </li>
            <li>
              <p>
                <span>Comprehensive Benefits Package: </span>Enjoy an extensive
                range of additional perks not only for you but also for your
                loved ones.
              </p>
            </li>
            <li>
              <p>
                <span>Equitable Scheduling and Compensation: </span>Craft
                equitable work schedules across various shifts, ensure
                competitive pay, and maintain equal treatment for all.
              </p>
            </li>
            <li>
              <p>
                <span>Continuous Enhancement: </span>Our commitment extends
                beyond the basics. We provide extra benefits and conduct regular
                assessments to enhance your experience with us.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <h3>
        Take the step towards a fulfilling career that values your well-being
        and growth.
      </h3>
      <div className={styles.btnBox}>
        <a href="#home"><button className={styles.callMe}>APPLY NOW</button></a>
        
      </div>
    </section>
  );
}
