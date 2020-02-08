import React from 'react';
import styles from '../../styles/header.module.scss';
import Layers from '@material-ui/icons/Layers';
import PersonPin from '@material-ui/icons/AccountCircle';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';
import Add from '@material-ui/icons/LibraryAdd';

function HeaderUI(props){
    let editBtn = props.isEdit ?
    <button onClick={props.save}>
        <Save />
    </button>
    :
    <button onClick={props.toggleIsEdit}>
        <Edit />
    </button>;
    return(
        <div className={styles.header}>
            <div className={styles.pageTitle}>
                <Layers />
                <p>{props.pageTitle}</p>
            </div>
            <div className={styles.filler}></div>
            <div className={styles.menus}>
                <button onClick={props.toggleAddApp}>
                    <Add />
                </button>
                {props.hasApps ? editBtn : ''}
                <button className={styles.personSheetBtn} onClick={props.togglePersonSheet}>
                    <PersonPin />
                    {props.user.name}
                </button>
            </div>
        </div>
    )
}

export default HeaderUI;