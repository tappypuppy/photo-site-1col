import styles from './Header.module.css'

function Header() {
  return (
  <header className={styles.header_box}>
    <h1 className={styles.header_logo}>PHOTO BOOK</h1>
  </header>
  )
}

export default Header;
