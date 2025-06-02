// src/components/layout/hero/HeroSection.js
"use client";
import React, { useState } from 'react';
import styles from './hero.module.css';

export default function HeroSection() {
  const [category, setCategory] = useState('rent');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`Searching for "${searchTerm}" in "${category}" category`);
    // Replace alert with your navigation or API call
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Find Your Dream Property</h2>
          <p>Search from thousands of listings to buy, rent, or sell a property</p>

          <div className={styles.searchContainer}>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.dropdown}
            >
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>

            <input
              type="text"
              placeholder="Search by location, property name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />

            <button onClick={handleSearch} className={styles.searchButton}>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
