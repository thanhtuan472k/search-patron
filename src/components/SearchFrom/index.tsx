import React, { useState } from 'react'
import styles from './style.module.css'

function SearchForm() {
    const [passport, setPassport] = useState('');
    const [dob, setDob] = useState('');
    const [memberNo, setMemberNo] = useState('');
    const [memberName, setMemberName] = useState('');

    const handleSearch = () => {
        // Logic to handle search and set results
        // For now, just setting dummy data
        setMemberNo('123456');
        setMemberName('John Doe');
    };

    const handleReset = () => {
        setPassport('');
        setDob('');
        setMemberNo('');
        setMemberName('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h2 className={styles.header}>HPR MEMBER SEARCH</h2>
                <input
                    type="text"
                    placeholder="Passport"
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="date"
                    placeholder="DOB"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className={styles.input}
                />
                <div className={styles.buttonContainer}>
                    <button onClick={handleSearch} className={styles.button}>
                        SEARCH
                    </button>
                    <button onClick={handleReset} className={styles.button}>
                        RESET
                    </button>
                </div>
            </div>
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
    )
}

export default SearchForm