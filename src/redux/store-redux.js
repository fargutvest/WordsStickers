import { createStore, combineReducers, applyMiddleware } from "redux";
import errorReducer from "./error-reducer";
import gdriveReducer from "./gdrive-reducer";
import spreadsheetReducer from "./spreadsheet-reducer";
import stickersReducer from "./stickers-reducer";
import signinReducer from "./signin-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


var reducers = combineReducers({
    errorPage: errorReducer,
    spreadsheetPage: spreadsheetReducer,
    stickersPage: stickersReducer,
    filesListPage: gdriveReducer,
    signInPage: signinReducer,
    form: formReducer
});

var store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;