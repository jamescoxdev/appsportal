import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './containers/header.container';
import ModalAppEditor from './containers/modal.appEditor.container';
import Body from './containers/body.container';
import PersonSheet from './ui/personSheet.ui';
import { updateApps } from '../actions/apps';
import '../styles/App.scss';

class App extends Component{
    constructor(props){
        super(props);
        document.title = props.pageTitle;
    }

    componentDidMount(){
        if(window.localStorage.getItem('apps') !== undefined && window.localStorage.getItem('apps') !== null){
            let apps = JSON.parse(window.localStorage.getItem('apps'));
            this.props.updateApps(apps);
        }
    }
    
    render(){
        return (
            <div className="App">
                <Header />
                <ModalAppEditor />
                <PersonSheet />
                <div id="blurSheet" className={(this.props.personSheetOpen ? 'showBlur' : '')}>
                    <Body />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        apps: state.apps,
        isEdit: state.toggles.isEdit,
        personSheetOpen: state.toggles.personSheetOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateApps: (apps) => dispatch(updateApps(apps))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);