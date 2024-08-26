import { useState } from 'react';
import styles from './style.module.css';
import { useAuth } from '../../contexts/auth';

const LoginForm = () => {
    const {login} = useAuth()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        try {
            
            await login({email: username, password});
            setLoading(false)
        } catch (error:any) {
            console.log(error)
            setError(error?.message)
            setLoading(false)
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
                    disabled={loading}
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
                    disabled={loading}
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" disabled={loading} className={styles.button}>{loading ? "loading...": "confirm"}</button>
            </form>
        </div>
    );
};

export default LoginForm;
