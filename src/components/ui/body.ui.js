import React from 'react';
import Img from 'react-image';
import bck from '../../img/bck.jpg';
import Reorder from 'react-reorder';
import styles from '../../styles/body.module.scss';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/LibraryAdd';

function BodyUI(props){
    const startMsg = <div className={styles.startMsg}>
        Lets get started
        <br />
        <button onClick={() => props.editApp(null)}><Add />Add App</button>
    </div>
    return(
        <div className={styles.body} style={{backgroundImage:`url(${bck})`}}>
            {!props.apps.length ? startMsg : ''}
            {props.isEdit && props.apps.length ? <div className={styles.msgContainer}><p className={styles.msg}>Click & Drag to reorder your apps</p></div> : ''}
            <Reorder
                reorderId="myApps"
                component="ul"
                onReorder={props.onReorder}
                autoScroll={true}
                disabled={props.isEdit ? false : true}
                disableContextMenus={true}
            >
                {
                    props.apps.map((v,i) => {
                        return <li key={i} className={props.isEdit ? styles.itemEdit : ''}>
                            {props.isEdit ? <button className={styles.editBtn} onMouseDown={(e) => e.stopPropagation() } onClick={() => props.editApp(v)}><Edit /></button> : <></>}
                            {props.isEdit ? <button className={styles.deleteBtn} onMouseDown={(e) => e.stopPropagation() } onClick={() => props.updateApps(v.guid)}><Delete /></button> : <></>}
                            <a onClick={(e) => props.isEdit ? e.preventDefault() : ''} href={v.appURL} target="_blank" rel="noopener noreferrer">
                                <Img draggable="false" src={'https://intranet.salvos.net/php/misc/getFavicon.php?url=' + v.appURL + '&browser=apps.png'} />
                                <span>{v.appName}</span>
                            </a>
                        </li>
                    })
                }
            </Reorder>
        </div>
    )
}

export default BodyUI;