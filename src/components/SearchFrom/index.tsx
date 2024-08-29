import { useState } from "react";
import styles from "./style.module.css";
import { useAuth } from "../../contexts/auth";
import { patronApi } from "../../apis/patron";

function SearchForm() {
  const { user, logout } = useAuth();
  const [passport, setPassport] = useState("");
  const [dob, setDob] = useState("");
  const [memberNo, setMemberNo] = useState("");
  const [memberName, setMemberName] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await patronApi.getList({ passport, dob });
      // setResult(response);
      if (response > 0) {
        setMemberNo(response);
        setMemberName(`${response[0].FirstName} ${response[0].LastName}`);
      }
    } catch (error) {
      console.error("Error fetching filtered users:", error);
    }
  };

  const handleReset = () => {
    setPassport("");
    setDob("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.topRight}>
        {user && (
          <>
            <span>
              Hi, {user.FirstName} {user.LastName}
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
            placeholder="Passport"
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
            className={styles.input}
            // required
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
            value={memberNo}
            readOnly
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Member Name"
            value={memberName}
            readOnly
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
