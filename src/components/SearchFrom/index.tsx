import { useState } from "react";
import styles from "./style.module.css";
import { useAuth } from "../../contexts/auth";
import { patronApi } from "../../apis/patron";

function SearchForm() {
  const { user, logout } = useAuth();
  const [idNumber, setIdNumber] = useState("");
  const [dob, setDob] = useState("");
  const [memberNo, setMemberNo] = useState("");
  const [memberName, setMemberName] = useState("");
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // setLoading(true);
    // handleReset();
    // Clear old results
    setMemberNo("");
    setMemberName("");
    setError("");
    try {
      const response = await patronApi.getList({ idNumber, dob });
      if (response.Patrons.length > 0) {
        setMemberNo(response.Patrons[0].PatronNumber);
        setMemberName(
          `${response.Patrons[0].FirstName} ${response.Patrons[0].LastName}`
        );
      }
    } catch (error: any) {
      setError(error?.ErrorMessage || "Something went wrong");
    } finally {
      // setLoading(false);
    }
  };

  const handleReset = () => {
    setIdNumber("");
    setDob("");
    setMemberNo("");
    setMemberName("");
    setError("");
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
      <form className={styles.searchContainer} onSubmit={handleSearch}>
        <h2 className={styles.header}>HPR MEMBER SEARCH</h2>
        <input
          type="text"
          placeholder="Passport"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className={styles.input}
          required
        />
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Search
          </button>
          <button type="button" onClick={handleReset} className={styles.button}>
            Reset
          </button>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
        {memberNo && (
          <div className={styles.resultContainer}>
            <h3 className={styles.resultHeader}>Member Details</h3>
            <p>Member No: {memberNo}</p>
            <p>Member Name: {memberName}</p>
          </div>
        )}
      </form>
      {/* <div className={styles.resultContainer}>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <h3 className={styles.resultHeader}>RESULT</h3>
        <input
          type="text"
          placeholder="Member No"
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
      </div> */}
    </div>
  );
}

export default SearchForm;
