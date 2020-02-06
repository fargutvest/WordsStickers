const UPDATE_FILES_LIST = 'UPDATE_FILES_LIST';

var initialState = {
    filesList: []
}

const gdriveReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILES_LIST:
            state.filesList = action.newFilesList;
            return state;
        default:
            return state;
    }
}

export const updatePhrasebookFilesActionCreator = (newFilesList) => ({ type: UPDATE_FILES_LIST, newFilesList: newFilesList });

export default gdriveReducer;