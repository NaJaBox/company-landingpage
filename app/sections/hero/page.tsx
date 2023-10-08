import styles from "./page.module.css";
import Form from "../../../components/ApplicationForm/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <header>
          <nav>
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
                <a href="#benefits">Your Benefits</a>
                <a href="#offer">Our Offer</a>
                <a href="/">Login</a>
              </div>
            </div>
          </nav>
        </header>
        <div className={styles.heroTxt}>
          <h1>
            <span id="home">Nurturing</span>  Ambitions <br /> Fostering Families
          </h1>
          <h2>Begin Your Journey Now</h2>
          <h4>Time To Give More Value To Both</h4>
        </div>
        <Form />
      </section>
      <section>
        <div className={styles.groupContainer}>
          <div className={styles.groupBkg} />
          <div className={styles.candidateGroup}></div>
        </div>
      </section>
    </main>
  );
}
