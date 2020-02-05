const UPDATE_SPREADSHEET_ID = 'UPDATE_SPREADSHEET_ID';

const spreadsheetReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SPREADSHEET_ID:
            state.spreadseetId = action.newSpreadseetId;
            return state;
        default:
            return state;
    }
}

export const updateSpreadsheetIdActionCreator = (newSpreadseetId) => ({ type: UPDATE_SPREADSHEET_ID, newSpreadseetId: newSpreadseetId });


export default spreadsheetReducer;