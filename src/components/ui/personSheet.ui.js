import React from 'react';
import { connect } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import styles from '../../styles/personSheet.module.scss';

function PersonSheet(props){
    return(
        <div className={props.toggles.personSheetOpen ? styles.openPersonSheet + ' ' + styles.personSheet : styles.personSheet}>
            <div className={styles.personSheetPersonCard}>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan="2">
                                <AccountCircle />
                            </td>
                            <td style={{paddingTop:'5px'}}>
                                <p>{props.me.name}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style={{'fontSize':'13px'}}>{props.me.name}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={() => alert('You must attach this app to an Auth provider...')} className={styles.menuBtn}><PowerSettingsNew />Log Out</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        me: state.user,
        toggles: state.toggles
    }
}

export default connect(mapStateToProps)(PersonSheet);