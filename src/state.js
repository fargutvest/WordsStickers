import React, { Component } from 'react';


let state =
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
}

let rerender = () => {

}

export let subscribe = (observer) => {
  rerender = observer;
}

export let updateStickers = (newStickers) => {
  state.stickers = newStickers;
  rerender(state);
}

export let updatePdf = (newPdf) => {
  state.pdf = newPdf;
  rerender(state);
}

export let updateSpreadsheetId = (newSpreadseetId) => {
  state.spreadseetId = newSpreadseetId;
  rerender(state);
}

export let updateError = (newError) => {
  state.error = newError;
  rerender(state);
}

export let updateFilesList = (newFilesList) => {
  state.filesList = newFilesList;
  rerender(state);
}


export default state;