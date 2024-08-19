import styles from './style.module.css';

const LoginForm = () => {
    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.heading}>Login to search patron</h2>
            <form>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>Confirm</button>
            </form>
        </div>
    );
};

export default LoginForm;
