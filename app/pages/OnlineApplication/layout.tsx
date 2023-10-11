import styles from "./page.module.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile Setup",
  description: "User profile setup page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className={styles.navbar}>
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
        </div> */}
        {children}
      </body>
    </html>
  );
}
