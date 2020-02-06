import React from 'react';

const UPDATE_PDF = 'UPDATE_PDF';
const UPDATE_STICKERS = 'UPDATE_STICKERS';

var stickers = [
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
    ]
];

var initialState = {
    pdf: React.createRef(),
    stickers: stickers
}


const stickersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PDF:
            state.pdf = action.newPdf;
            return state;
        case UPDATE_STICKERS:
            state.stickers = action.newStickers;
            return state;
        default:
            return state;
    }
}

export const updatePdfActionCreator = (newPdf) => ({ type: UPDATE_PDF, newPdf: newPdf });
export const updateStickersActionCreator = (newStickers) => ({ type: UPDATE_STICKERS, newStickers: newStickers });

export default stickersReducer;