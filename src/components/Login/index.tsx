import { useState } from "react";
import styles from "./style.module.css";
import { useAuth } from "../../contexts/auth";
import { appConfig } from "../../../AppConfig";

const LoginForm = () => {
  const { login } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login({
        userName,
        password,
        domain: appConfig.IGT_APT_INFO_DOMAIN,
        timeToLive: appConfig.TIME_TO_LIVE,
      });
      setLoading(false);
    } catch (error: any) {
      setError(error?.ErrorMessage || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.heading}>Login to search patron</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="userName">
            Username
          </label>
          <input
            disabled={loading}
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            disabled={loading}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
