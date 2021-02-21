import { React, useState } from 'react';
import styles from './About.module.scss';

const About = () => {
    const [workOpen, isWorkOpen] = useState(false);

    const handleClick = () => {
        isWorkOpen(!workOpen);
    }
    
    return (
        <div className={styles.aboutContainer}>
             <button className={styles.aboutButton} onClick={handleClick}>
                about
            </button>
            {workOpen && (
                <div className={styles.aboutBody}>
                    This is a paragraph about myself as a person and developer
                </div>
            )}
        </div>
    )
};

export default About;