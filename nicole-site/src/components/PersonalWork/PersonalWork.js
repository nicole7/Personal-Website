import { React, useState } from 'react';
import styles from './PersonalWork.module.scss';

const PersonalWork = () => {
    const [workOpen, isWorkOpen] = useState(false);

    const handleClick = () => {
        isWorkOpen(!workOpen);
    }

    return (
        <div className={styles.personalContainer}>
              <button className={styles.personalButton} onClick={handleClick}>
                personalWork
            </button>
            {workOpen && (
                <div className={styles.personalBody}>
                    This is a link to my Github account
                </div>
            )}
        </div>
    )
};

export default PersonalWork;