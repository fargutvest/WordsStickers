const UPDATE_FILES_LIST = 'UPDATE_FILES_LIST';

const gdriveReducer = (state, action) => {
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