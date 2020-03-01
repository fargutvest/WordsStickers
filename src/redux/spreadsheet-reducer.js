import { listFiles, getLastCreatedFile } from '../API/GDriveAPI'

export const UPDATE_SPREADSHEET_ID = 'UPDATE_SPREADSHEET_ID';

var initialState = {
    spreadseetId: localStorage.getItem(UPDATE_SPREADSHEET_ID)
}

const spreadsheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SPREADSHEET_ID:
            localStorage.setItem(UPDATE_SPREADSHEET_ID, action.newSpreadseetId);
            return { ...state, spreadseetId: action.newSpreadseetId }
        default:
            return state;
    }
}

export const getLatestSpreadsheetId = () => {
    return (dispatch) => {
        listFiles((files) => {
            var lastCreatedFile = getLastCreatedFile(files);
            dispatch(updateSpreadsheetId(lastCreatedFile.id));
        });
    }
}

export const updateSpreadsheetId = (newSpreadseetId) => ({ type: UPDATE_SPREADSHEET_ID, newSpreadseetId: newSpreadseetId });


export default spreadsheetReducer;