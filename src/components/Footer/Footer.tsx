import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer_box}>
      <div className={styles.inner}>
        <p>© 2020 PHOTO BOOK</p>
      </div>
    </footer>
  );
}

export default Footer;
