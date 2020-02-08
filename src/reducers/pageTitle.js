export function pageTitle(state = 'App Portal', action){
    switch(action.type){
        case 'UPDATE_PAGE_TITLE':
            return action.title
        default:
            return state;
    }
}