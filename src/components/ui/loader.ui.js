import React from 'react';
import styles from '../../styles/Loader.module.scss';

function Loader(){
    return(
        <div className={styles.loaderContainer4tiles}>
            <div className={styles.s4}></div>
            <div className={styles.s2}></div>
            <div className={styles.s1}></div>
            <div className={styles.s3}></div>
        </div>
    );
}

export default Loader;