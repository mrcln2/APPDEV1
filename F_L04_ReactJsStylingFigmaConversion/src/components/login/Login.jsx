// src/components/Login/Login.jsx
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back</h1>
        <form className={styles.form}>
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <button type="submit" className={styles.button}>Log In</button>
        </form>
      </div>
    </div>
  );
}