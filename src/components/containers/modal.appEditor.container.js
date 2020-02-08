import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalAppEditor from '../ui/modal.appEditor.ui';
import { updateAddAppToggle } from '../../actions/toggles';
import { updateApps } from '../../actions/apps';
import { updateAppEditor } from '../../actions/appEditor';
import guid from '../../util/guid';

class AddAppModal extends Component{
    updateVals = (e,i) => {
        let editor = {...this.props.appEditor};
        let value = e.target.value;
        if(i === 'appURL' && e.target.value.length > 4 && e.target.value.substring(0,4) !== 'http'){
            value = 'http://' + value;
        }
        editor[i] = value;
        this.props.updateEditor(editor);
    }
    saveApp = () => {
        let newApps = [...this.props.apps]
        this.props.appEditor.guid === '' ?
            newApps.push({
                guid: guid(),
                appName: this.props.appEditor.appName,
                appURL: this.props.appEditor.appURL
            })
        :
            newApps = newApps.filter((app) => {
                if(app.guid === this.props.appEditor.guid){
                    app.appName = this.props.appEditor.appName;
                    app.appURL = this.props.appEditor.appURL;
                }
                return app;
            });
        ;
        window.localStorage.setItem('apps',JSON.stringify(newApps));
        this.props.updateApps(newApps);
        this.cancelModal();
    }
    cancelModal = () => {
        this.props.updateEditor({
            guid: '',
            appName: '',
            appURL: ''
        });
        this.props.toggleAddApp(false);
    }

    render(){
        return(
            <ModalAppEditor
                active={this.props.toggles.addApp}
                updateVal={(e,i) => this.updateVals(e,i)}
                values={this.props.appEditor}
                saveApp={this.saveApp}
                cancelModal={this.cancelModal}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toggles: state.toggles,
        apps: state.apps,
        appEditor: state.appEditor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleAddApp: (bool) => dispatch(updateAddAppToggle(bool)),
        updateApps: (apps) => dispatch(updateApps(apps)),
        updateEditor: (app) => dispatch(updateAppEditor(app))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAppModal);