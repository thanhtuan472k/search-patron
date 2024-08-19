import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { getData } from "../../apis/user";

function SearchForm() {
  const [passport, setPassport] = useState("");
  const [dob, setDob] = useState("");
  const [memberNo, setMemberNo] = useState("");
  const [memberName, setMemberName] = useState("");
  const [result, setResult] = useState([])

  // Call api data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setResult(data);
    };

    fetchData();
  }, []);


  const handleSearch = () => {
    // Logic to handle search and set results
    // For now, just setting dummy data
    // setMemberNo('123456');
    // setMemberName('John Doe');
  };

  const handleReset = () => {
    // setPassport("");
    // setDob("");
    // setMemberNo("");
    // setMemberName("");
  };

  console.log("data", result)

  return (
    <div className={styles.container}>
      <form className={styles.searchContainer} onSubmit={handleSearch}>
        <h2 className={styles.header}>HPR MEMBER SEARCH</h2>
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
  );
}

export default SearchForm;
