import React, { Component } from 'react';

const UPDATE_FILES_LIST = 'UPDATE_FILES_LIST';
const UPDATE_ERROR = 'UPDATE_ERROR';
const UPDATE_SPREADSHEET_ID = 'UPDATE_SPREADSHEET_ID';
const UPDATE_PDF = 'UPDATE_PDF';
const UPDATE_STICKERS = 'UPDATE_STICKERS';
const UPDATE_IS_SIGNED_IN = 'UPDATE_IS_SIGNED_IN';


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
    isSignedIn: false
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
    switch (action.type) {
      case UPDATE_FILES_LIST:
        this._state.filesList = action.newFilesList;
        this.rerender(this._state);
        break;
      case UPDATE_ERROR:
        this._state.error = action.newError;
        this.rerender(this._state);
        break;
      case UPDATE_SPREADSHEET_ID:
        this._state.spreadseetId = action.newSpreadseetId;
        this.rerender(this._state);
        break;
      case UPDATE_PDF:
        this._state.pdf = action.newPdf;
        this.rerender(this._state);
        break;
      case UPDATE_STICKERS:
        this._state.stickers = action.newStickers;
        this.rerender(this._state);
        break;
      case UPDATE_IS_SIGNED_IN:
        this._state.isSignedIn = action.isSignedIn;
        this.rerender(this._state);
        break;
    }
  }
}

export const updateFilesListActionCreator = (newFilesList) => ({ type: UPDATE_FILES_LIST, newFilesList: newFilesList });
export const updateErrorActionCreator = (newError) => ({ type: UPDATE_ERROR, newError: newError });
export const updateSpreadsheetIdActionCreator = (newSpreadseetId) => ({ type: UPDATE_SPREADSHEET_ID, newSpreadseetId: newSpreadseetId });
export const updatePdfActionCreator = (newPdf) => ({ type: UPDATE_PDF, newPdf: newPdf });
export const updateStickersActionCreator = (newStickers) => ({ type: UPDATE_STICKERS, newStickers: newStickers });
export const updateIsSignedInActionCreator = (isSignedIn) => ({ type: UPDATE_IS_SIGNED_IN, isSignedIn: isSignedIn });


export default store;