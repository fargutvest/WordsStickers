import {createStore, combineReducers}  from "redux";
import errorReducer from "./error-reducer";
import gdriveReducer from "./gdrive-reducer";
import spreadsheetReducer from "./spreadsheet-reducer";
import stickersReducer from "./stickers-reducer";
import signinReducer from "./signin-reducer";


var reducers = {
    error: errorReducer,
    spreadsheetId: spreadsheetReducer,
    stickers: stickersReducer,
    filesList: gdriveReducer,
    signInPage: signinReducer
}

combineReducers(reducers);

var store = createStore(reducers);

export default store;