export function updateAddAppToggle(bool){
    return {
        type: 'UPDATE_ADDAPP_TOGGLE',
        toggle: bool
    }
}

export function updateIsEditToggle(bool){
    return {
        type: 'UPDATE_ISEDIT_TOGGLE',
        toggle: bool
    }
}

export function updatePersonSheetToggle(bool){
    return {
        type: 'UPDATE_PERSONSHEET_TOGGLE',
        toggle: bool
    }
}