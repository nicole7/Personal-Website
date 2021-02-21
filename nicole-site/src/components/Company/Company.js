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
                onClose={closeModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{ size: 'large' }}
                className="companyModal"
              >
                <div className={styles.companyBody}>
                    <div className={styles.companyModalHeader}> 
                        <h2 className={styles.companyModalHeaderText}>companyWork</h2>
                        <CancelIcon className={styles.companyCloseIcon} onClick={closeModal}/>
                    </div>
                    <div className={styles.companyBodyText}>
                        <div className={styles.companyDescription}>
                            <div className={styles.companyTitle}><strong>Inspire 11</strong></div>
                            <p>
                                API Article Project in Ruby/Rails
                                Release Notes Project in Ruby/Rails with React front end
                                Co-wrote training guide for new hires
                                Research and create project for tracking failed qualifications through our API
                                Part of Engineering Support rotation and DevOps task force to monitor and debug live client facing appAPI Article Project in Ruby/Rails
                                Release Notes Project in Ruby/Rails with React front end
                                Co-wrote training guide for new hires
                                Research and create project for tracking failed qualifications through our API
                                Part of Engineering Support rotation and DevOps task force to monitor and debug live client facing app
                            </p>
                        </div>  
                        <div className={styles.companyDescription}>
                        <div className={styles.companyTitle}><strong>Visibly</strong></div>
                            <p>
                                Develop and test feature and bug stories
                                API Article Project in Ruby/Rails
                                Release Notes Project in Ruby/Rails with React front end
                                Co-wrote training guide for new hires
                                Research and create project for tracking failed qualifications through our API
                                Part of Engineering Support rotation and DevOps task force to monitor and debug live client facing app
                                API Article Project in Ruby/Rails
                                Release Notes Project in Ruby/Rails with React front end
                                Co-wrote training guide for new hires
                                Research and create project for tracking failed qualifications through our API
                                Part of Engineering Support rotation and DevOps task force to monitor and debug live client facing app
                        </p>
                        </div> 
                    </div>
                </div>
            </Modal>
        </div>
    )
};

export default Company;