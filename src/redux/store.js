import React from 'react';
import gdriveReducer from "./gdrive-reducer";
import errorReducer from "./error-reducer";
import spreadsheetReducer from "./spreadsheet-reducer";
import signinReducer from "./signin-reducer";
import stickersReducer from "./stickers-reducer";

let store = {
  _state:
  {
    stickers: [
      [
        {
          English: "Hello1",
          Spelling: "spelling =)",
          Russian: "Privet"
        },
        {
          English: "Hello2",
          Spelling: "spelling =)",
          Russian: "Privet"
        },
        {
          English: "Hello3",
          Spelling: "spelling =)",
          Russian: "Privet"
        },
        {
          English: "Hello4",
          Spelling: "spelling =)",
          Russian: "Privet"
        }
      ],
    ],
    pdf: React.createRef(),
    spreadseetId: "",
    error: "",
    filesList: [],
    isSignedIn: false,
    profile: ""
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.rerender = observer;
  },
  rerender() {
    console.log('State changed');
  },
  dispatch(action) {

    this._state = gdriveReducer(this._state, action);
    this._state = errorReducer(this._state, action);
    this._state = spreadsheetReducer(this._state, action);
    this._state = signinReducer(this._state, action);
    this._state = stickersReducer(this._state, action);
    this.rerender(this._state);
  }
}


export default store;