import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderUI from '../ui/header.ui';
import { updateAddAppToggle, updateIsEditToggle, updatePersonSheetToggle } from '../../actions/toggles';

class Header extends Component{
    toggleAddApp = () => {
        this.props.toggleAddApp(!this.props.toggles.addApp);
    }
    toggleIsEdit = () => {
        this.props.toggleIsEdit(!this.props.toggles.isEdit);
    }
    togglePersonSheet = () => {
        this.props.togglePersonSheet(!this.props.toggles.personSheetOpen);
    }
    save = () => {
        window.localStorage.setItem('apps',JSON.stringify(this.props.apps));
        this.toggleIsEdit();
    }
    hasApps = () => {
        let hasApps = this.props.apps.length ? true : false;
        return hasApps;
    }
    render(){
        return(
            <HeaderUI
                pageTitle={this.props.pageTitle}
                user={this.props.user}
                toggleAddApp={this.toggleAddApp}
                toggleIsEdit={this.toggleIsEdit}
                togglePersonSheet={this.togglePersonSheet}
                isEdit={this.props.toggles.isEdit}
                save={this.save}
                hasApps={this.hasApps()}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        user: state.user,
        toggles: state.toggles,
        apps: state.apps
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleAddApp: (bool) => dispatch(updateAddAppToggle(bool)),
        toggleIsEdit: (bool) => dispatch(updateIsEditToggle(bool)),
        togglePersonSheet: (bool) => dispatch(updatePersonSheetToggle(bool))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);