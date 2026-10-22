// src/components/Login/Login.jsx
import styles from './Login.module.css';
import bgLeaves from '../../assets/bg-leaves.jpg';
import googleIcon from '../../assets/google.svg';
import facebookIcon from '../../assets/facebook.svg';

export default function Login() {
  return (
    <div className={styles.card}>
      <div className={styles.leftPanel}>
        <img src={bgLeaves} alt="Leaf pattern" className={styles.leftImage} />
      </div>
      <div className={styles.rightPanel}>
        <h1 className={styles.title}>Hello, Guyss!</h1>
        
        <div className={styles.tabs}>
          <span className={styles.tabActive}>Login</span>
          <span className={styles.tabInactive}>SignUp</span>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className={styles.inputGroup}>
            <input type="password" placeholder="Enter Password" required />
          </div>
          <button type="submit" className={styles.submitBtn}>Login</button>
        </form>

        <p className={styles.divider}>Or</p>

        <div className={styles.socials}>
          <img src={googleIcon} alt="Google" className={styles.socialIcon} />
          <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
        </div>
      </div>
    </div>
  );
}