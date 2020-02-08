const defaultState = {
    addApp: false,
    isEdit: false,
    personSheetOpen: false
}

export function toggles(state = defaultState, action){
    switch(action.type){
        case 'UPDATE_ADDAPP_TOGGLE':
            return {...state,addApp:action.toggle};
        case 'UPDATE_ISEDIT_TOGGLE':
            return {...state,isEdit:action.toggle};
        case 'UPDATE_PERSONSHEET_TOGGLE':
            return {...state,personSheetOpen:action.toggle}
        default:
            return state;
    }
}