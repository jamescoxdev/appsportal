const defaultState = {
    guid: '',
    appName: '',
    appURL: ''
}

export function appEditor(state = defaultState, action){
    switch(action.type){
        case 'UPDATE_APP_EDITOR':
            return action.app
        default:
            return state;
    }
}