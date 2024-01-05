import Link from 'next/link';
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.logo}>LOGO</div>
    <div className={styles.menu}>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
    <div className={styles.userProfile}>Profile</div>
  </header>
  )
}

export default Header