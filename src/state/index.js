const state = {
    pageTitle: 'App Portal',
    user: {
        name: 'Anonymous'
    },
    toggles: {
        addApp: false,
        isEdit: false,
        personSheetOpen: false
    },
    appEditor: {
        guid: '',
        appName: '',
        appURL: ''
    },
    apps: []
}

export default state;