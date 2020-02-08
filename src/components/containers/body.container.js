import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reorder } from 'react-reorder';
import BodyUI from '../ui/body.ui';
import { updateApps } from '../../actions/apps';
import { updateAppEditor } from '../../actions/appEditor';
import { updateAddAppToggle } from '../../actions/toggles';

class Body extends Component{
    updateApps = (id) => {
        let newApps = this.props.apps.filter(function(obj){
            return obj.guid !== id;
        });
        this.props.updateApps(newApps);
    }
    editApp = (app) => {
        if(app !== null){
            this.props.editApp(app);
        }
        this.props.toggleAppEditor(true);
    }
    onReorder = (event, previousIndex, nextIndex, fromId, toId) => {
        let newApps = reorder(this.props.apps, previousIndex, nextIndex);
        console.log(newApps);
        this.props.updateApps(newApps);
    }

    render(){
        return(
            <BodyUI
                apps={this.props.apps}
                isEdit={this.props.isEdit}
                updateApps={this.updateApps}
                editApp={(app) => this.editApp(app)}
                onReorder={this.onReorder}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        apps: state.apps,
        isEdit: state.toggles.isEdit
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateApps: (apps) => dispatch(updateApps(apps)),
        editApp: (app) => dispatch(updateAppEditor(app)),
        toggleAppEditor: (bool) => dispatch(updateAddAppToggle(bool))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Body);