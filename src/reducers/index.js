import { combineReducers } from 'redux';
import { pageTitle } from './pageTitle';
import { user } from './user';
import { toggles } from './toggles';
import { apps } from './apps';
import { appEditor } from './appEditor';

export default combineReducers({
    pageTitle,
    user,
    toggles,
    apps,
    appEditor
});