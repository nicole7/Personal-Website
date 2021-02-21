import React from 'react';
import styles from './PersonalWork.module.scss';

const PersonalWork = () => {

    const handleClick = () => {
        window.open('https://github.com/nicole7','_blank');
    }

    return (
        <div className={styles.personalContainer}>
            <button className={styles.personalButton} onClick={handleClick}>
                personalWork
            </button>
           
        </div>
    )
};

export default PersonalWork;