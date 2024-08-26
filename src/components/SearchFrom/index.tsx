import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useAuth } from "../../contexts/auth";
import { patronApi } from "../../apis/patron";
import { IPatron, IUser } from "../../types/user";
// import { getData } from "../../apis/user";

function SearchForm() {
  const { user, logout } = useAuth();
  const [keyword, setKeyword] = useState("");
  const [passport, setPassport] = useState("");
  const [dob, setDob] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await patronApi.getList({ keyword, passport, dob });
      setResult(response);
    } catch (error) {
      console.error("Error fetching filtered users:", error);
    }
  };

  const handleReset = () => {
    setKeyword("");
    setPassport("");
    setDob("");
    setResult([]);
  };

  console.log("data", result);
  return (
    <div className={styles.container}>
      <div className={styles.topRight}>
        {user && (
          <>
            <span>
              Hi, {user.first_name} {user.last_name}
            </span>
            <button onClick={logout} className={styles.logoutButton}>
              Logout
            </button>
          </>
        )}
      </div>
      <div className={styles.container}>
        <form className={styles.searchContainer} onSubmit={handleSearch}>
          <h2 className={styles.header}>HPR MEMBER SEARCH</h2>
          <input
            type="text"
            placeholder="Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Passport"
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="date"
            placeholder="DOB"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className={styles.input}
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              SEARCH
            </button>
            <button onClick={handleReset} className={styles.button}>
              RESET
            </button>
          </div>
        </form>
        <div className={styles.resultContainer}>
          <h3 className={styles.resultHeader}>RESULT</h3>
          <input
            type="text"
            placeholder="Member No."
            value={result}
            readOnly
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Member Name"
            // value={}
            readOnly
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
