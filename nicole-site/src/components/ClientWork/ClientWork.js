import { React, useState } from 'react';
import styles from './ClientWork.module.scss';

const ClientWork = () => {
    const [workOpen, isWorkOpen] = useState(false);

    const handleClick = () => {
        isWorkOpen(!workOpen);
    }

    return (
        <div className={styles.clientContainer}>
              <button className={styles.clientButton} onClick={handleClick}>
                clientWork
            </button>
            {workOpen && (
                <div className={styles.clientBody}>
                    This is a paragragh discussing all my client work
                </div>
            )}
        </div>
    )
};

export default ClientWork;

