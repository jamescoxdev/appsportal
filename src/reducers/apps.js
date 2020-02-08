export function apps(state = [], action){
    switch(action.type){
        case 'UPDATE_APPS':
            return action.apps
        default:
            return state;
    }
}