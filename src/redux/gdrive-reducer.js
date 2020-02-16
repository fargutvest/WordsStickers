import { listFiles, cleanFiles, getLastCreatedFile } from './../API/GDriveAPI'
const UPDATE_FILES_LIST = 'UPDATE_FILES_LIST';

var initialState = {
    phrasebookFilesTree: {
        latestPhrasebookFile: '',
        allPhrasebookFiles: []
    }

}

const gdriveReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_FILES_LIST:
            return { ...state, phrasebookFilesTree: { ...state.phrasebookFilesTree, allPhrasebookFiles: action.allPhrasebookFiles, latestPhrasebookFile: action.latestPhrasebookFile } }
        default:
            return state;
    }
}

export const getPhrasebookFiles = () => {
    return (dispatch) => {
        listFiles((files) => {
            var latest = getLastCreatedFile(files);
            dispatch(updatePhrasebookFiles(files, latest));
        });
    }
}

export const cleanPhrasebookFiles = (filesToClean) => {
    return (dispatch) => {
        cleanFiles(filesToClean);
        listFiles((files) => {
            var latest = getLastCreatedFile(files);
            dispatch(updatePhrasebookFiles(files, latest));
        });
    }
}

export const updatePhrasebookFiles = (allPhrasebookFiles, latestPhrasebookFile) => ({ type: UPDATE_FILES_LIST, allPhrasebookFiles: allPhrasebookFiles, latestPhrasebookFile: latestPhrasebookFile });

export default gdriveReducer;