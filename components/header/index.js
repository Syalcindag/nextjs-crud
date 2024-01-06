import Link from 'next/link';

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.logo}>LOGO</div>
    <div className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </div>
    <div className={styles.userProfile}>Profile</div>
  </header>
  )
}

export default Header