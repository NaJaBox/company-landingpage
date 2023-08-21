import styles from "./page.module.css";
import background from "../public/background.png";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <nav>
          <div className={styles.navbar}>
            <div className={styles.acmeLogo}>
              <div className={styles.logoTxt}>
                <h4>ACME</h4>
                <h6>GRUPPE</h6>
              </div>
            </div>
            <div className={styles.links}>
              <a href="/">About Us</a>
              <a href="/">About You</a>
              <a href="/">Login</a>
            </div>
          </div>
        </nav>
        <div className={styles.heroTxt}>
          <h1>
            Nurturing Ambitions <br /> Fostering Families
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
