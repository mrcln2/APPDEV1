// src/components/SignUp/SignUp.jsx
import React from 'react';
import styles from './SignUp.module.css';

export default function SignUp({ onSwitchToLogin }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create an Account</h2>
        <p className={styles.subtitle}>Sign up to get started</p>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input type="text" placeholder="John Doe" className={styles.input} required />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input type="email" placeholder="john@example.com" className={styles.input} required />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <input type="password" placeholder="••••••••" className={styles.input} required />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Confirm Password</label>
            <input type="password" placeholder="••••••••" className={styles.input} required />
          </div>

          <button type="submit" className={styles.button}>Sign Up</button>
        </form>

        <p className={styles.footerText}>
          Already have an account?{' '}
          <button type="button" onClick={onSwitchToLogin} className={styles.linkButton}>
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}