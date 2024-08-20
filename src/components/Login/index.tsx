import { useState } from 'react';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../apis/user';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await loginApi(username, password);
        if (response.success) {
            navigate('/search');
        } else {
            setError('Invalid credentials');
        }
    }

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.heading}>Login to search patron</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>Confirm</button>
            </form>
        </div>
    );
};

export default LoginForm;
