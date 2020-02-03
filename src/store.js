import React, { Component } from 'react';

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
    filesList: []
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.rerender = observer;
  },
  updateStickers(newStickers) {
    this._state.stickers = newStickers;
    this.rerender(this._state);
  },
  updatePdf(newPdf) {
    this._state.pdf = newPdf;
    this.rerender(this._state);
  },
  updateSpreadsheetId(newSpreadseetId) {
    this._state.spreadseetId = newSpreadseetId;
    this.rerender(this._state);
  },
  updateError(newError) {
    this._state.error = newError;
    this.rerender(this._state);
  },
  updateFilesList(newFilesList) {
    this._state.filesList = newFilesList;
    this.rerender(this._state);
  },
  rerender() {
    console.log('State changed');
  }
}


export default store;