import { useContext, useState } from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth();
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate('/') 
    } catch {
      setError('Invalid credentials')
    }
  }

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.heading}>Login to search patron</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor='Email'>
            Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type='submit' className={styles.button}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm