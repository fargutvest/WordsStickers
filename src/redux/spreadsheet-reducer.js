const UPDATE_SPREADSHEET_ID = 'UPDATE_SPREADSHEET_ID';

const spreadsheetReducer = (state, action) => {
    switch (action) {
        case UPDATE_SPREADSHEET_ID:
            state.spreadseetId = action.newSpreadseetId;
            return state;
    }
}

export const updateSpreadsheetIdActionCreator = (newSpreadseetId) => ({ type: UPDATE_SPREADSHEET_ID, newSpreadseetId: newSpreadseetId });


export default spreadsheetReducer;