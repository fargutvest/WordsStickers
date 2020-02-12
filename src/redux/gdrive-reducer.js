const UPDATE_FILES_LIST = 'UPDATE_FILES_LIST';

var initialState = {
    filesList: []
}

const gdriveReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_FILES_LIST:
            return { ...state, filesList: action.newFilesList }
        default:
            return state;
    }
}

export const updatePhrasebookFiles = (newFilesList) => ({ type: UPDATE_FILES_LIST, newFilesList: newFilesList });

export default gdriveReducer;