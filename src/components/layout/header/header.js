// src/components/layout/header/header.js
'use client';

import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>

      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/rent" className={styles.link}>Rent</Link>
        <Link href="/sell" className={styles.link}>Sell</Link>
        <Link href="/buy" className={styles.link}>Buy</Link>
        <Link href="/about" className={styles.link}>About</Link>
      </nav>

      <div className={styles.buttonContainer}>
        <button className={styles.headerButton}>listing</button>
      </div>
    </header>
  );
}
