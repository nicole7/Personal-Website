import { React, useState } from 'react';
import styles from './Company.module.scss';
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel';

const Company = () => {
    const [workOpen, isWorkOpen] = useState(false);

    const showModal = () => {
        isWorkOpen(true);
    }

    const closeModal = () => {
        isWorkOpen(false);
    }

    return (
        <div className={styles.companyContainer}>
            <button className={styles.companyButton} onClick={showModal}>
                companyWork
            </button>
            <Modal
                open={workOpen}
                // onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{ size: 'large' }}
                className="companyModal"
              >
                <div className={styles.companyBody}>
                    <div> 
                        <CancelIcon onClick={closeModal}/>
                    </div>
                    <p>This is a paragraph discussing my previous and current work experience</p>
                </div>
            </Modal>
        </div>
    )
};

export default Company;