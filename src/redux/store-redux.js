import { createStore, combineReducers, applyMiddleware } from "redux";
import errorReducer from "./error-reducer";
import gdriveReducer from "./gdrive-reducer";
import spreadsheetReducer from "./spreadsheet-reducer";
import stickersReducer from "./stickers-reducer";
import signinReducer from "./signin-reducer";
import thunkMiddleware from "redux-thunk";


var reducers = combineReducers({
    errorPage: errorReducer,
    spreadsheetPage: spreadsheetReducer,
    stickersPage: stickersReducer,
    filesListPage: gdriveReducer,
    signInPage: signinReducer
});

var store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;