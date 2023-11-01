import styles from "./page.module.css";
import {Users} from "../../../components/Users/Users";

const page = () => {
  return (
    <main className={styles.main}>
      <>
        <Users />
      </>
    </main>
  );
};

export default page;
