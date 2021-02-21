import { React, useState } from 'react';
import styles from './About.module.scss';
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel';

const About = () => {
    const [workOpen, isWorkOpen] = useState(false);

    const showModal = () => {
        isWorkOpen(true);
    }

    const closeModal = () => {
        isWorkOpen(false);
    }

    return (
        <div className={styles.aboutContainer}>
            <button className={styles.aboutButton} onClick={showModal}>
            aboutWork
            </button>
            <Modal
                open={workOpen}
                onClose={closeModal}
              >
                <div className={styles.aboutBody}>
                    <div className={styles.aboutModalHeader}> 
                        <h2 className={styles.aboutModalHeaderText}>&#123;aboutWork&#125;</h2>
                        <CancelIcon className={styles.aboutCloseIcon} onClick={closeModal}/>
                    </div>
                    <div className={styles.aboutBodyText}>
                        <div className={styles.aboutDescription}>
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
                    </div>
                </div>
            </Modal>
        </div>
    )
};

export default About;