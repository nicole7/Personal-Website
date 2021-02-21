import { React, useState } from 'react';
import styles from './ClientWork.module.scss';
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel';

const ClientWork = () => {
    const [workOpen, isWorkOpen] = useState(false);

    const showModal = () => {
        isWorkOpen(true);
    }

    const closeModal = () => {
        isWorkOpen(false);
    }

    return (
        <div className={styles.clientContainer}>
            <button className={styles.clientButton} onClick={showModal}>
                clientWork
            </button>
            <Modal
                open={workOpen}
                onClose={closeModal}
              >
                <div className={styles.clientBody}>
                    <div className={styles.clientModalHeader}> 
                        <h2 className={styles.clientModalHeaderText}>&#123;clientWork&#125;</h2>
                        <CancelIcon className={styles.clientCloseIcon} onClick={closeModal}/>
                    </div>
                    <div className={styles.clientBodyText}>
                        <div className={styles.clientDescription}>
                            <div className={styles.clientTitle}><strong>Client Type</strong></div>
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
                        <div className={styles.clientDescription}>
                        <div className={styles.clientTitle}><strong>Client Type</strong></div>
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

export default ClientWork;

