import styles from "./page.module.css";
import Hero from "./sections/hero/page";
import Benefits from "./sections/benefits/page";
import Offer from "./sections/offer/page";
import Steps from "./sections/CTA/page";
import Footer from "./sections/footer/page";


export default function Home() {
  return (
      <main className={styles.main}>
        <>
          <Hero />
          <Benefits />
          <Offer />
          <Steps />
          <Footer />
        </>
      </main>
  );
}
