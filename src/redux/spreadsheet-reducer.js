export const UPDATE_SPREADSHEET_ID = 'UPDATE_SPREADSHEET_ID';

var initialState = {
    spreadseetId: localStorage.getItem(UPDATE_SPREADSHEET_ID)
}

const spreadsheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SPREADSHEET_ID:
            state.spreadseetId = action.newSpreadseetId;
            localStorage.setItem(UPDATE_SPREADSHEET_ID, state.spreadseetId);
            return state;
        default:
            return state;
    }
}

export const updateSpreadsheetIdActionCreator = (newSpreadseetId) => ({ type: UPDATE_SPREADSHEET_ID, newSpreadseetId: newSpreadseetId });


export default spreadsheetReducer;