import React from 'react';
import Img from 'react-image';
import Loader from './loader.ui';
import styles from '../../styles/modalAddApp.module.scss';

function ModalAddApp(props){
    return(
        <div className={styles.container} style={{display: props.active ? 'block' : 'none'}}>
            <div className={styles.modal}>
                <div className={styles.imgContainer}>
                    <Img src={'https://intranet.salvos.net/php/misc/getFavicon.php?url=' + props.values.appURL + '&browser=apps.png'} loader={<Loader />} />
                </div>
                <div style={{padding:'20px'}}>
                    <label htmlFor="AppName">App Name</label>
                    <input name="AppName" value={props.values.appName} onChange={(e) => props.updateVal(e,'appName') } />
                    <label htmlFor="AppURL">App URL</label>
                    <input name="AppURL" value={props.values.appURL} onChange={(e) => props.updateVal(e,'appURL') } />
                </div>
                <div className={styles.btns}>
                    <button onClick={props.saveApp}>Save</button>
                    <button onClick={props.cancelModal}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ModalAddApp;