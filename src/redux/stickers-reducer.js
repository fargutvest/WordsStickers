import React from 'react';

const UPDATE_PDF = 'UPDATE_PDF';
const UPDATE_STICKERS = 'UPDATE_STICKERS';
const MOUSE_OVER = 'MOUSE_OVER';
const MOUSE_LEAVE = 'MOUSE_LEAVE';
const STUDIED = 'STUDIED';
const IS_FETCHING_STICKERS = 'IS_FETCHING_STICKERS';

export let initialStickers = [
  {
    content: {
      English: "Hello1",
      Spelling: "spelling =)",
      Russian: "Privet"
    },
    id: 0,
    isMouseOver: false,
    isStudied: false
  }
];

var initialState = {
  pdf: React.createRef(),
  stickers: initialStickers,
  isFetchingStickers: false
}


const stickersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PDF:
      return { ...state, pdf: action.newPdf }
    case UPDATE_STICKERS:
      return { ...state, stickers: action.newStickers }
    case MOUSE_OVER:
      let copy = {
        ...state, stickers: state.stickers.map(sticker => {
          if (action.stickerId === sticker.id) {
            return { ...sticker, isMouseOver: true }
          }
          return sticker;
        })
      }
      return copy;
    case MOUSE_LEAVE:
      return {
        ...state, stickers: state.stickers.map(sticker => {
          if (action.stickerId === sticker.id) {
            return { ...sticker, isMouseOver: false }
          }
          return sticker;
        })
      }
    case STUDIED:
      return {
        ...state, stickers: state.stickers.map(sticker => {
          if (action.stickerId === sticker.id) {
            return { ...sticker, isStudied: action.isStudied }
          }
          return sticker;
        })
      }
    case IS_FETCHING_STICKERS:
      return {
        ...state, isFetchingStickers: action.isFetchingStickers
      }
    default:
      return state;
  }
}

export const updatePdf = (newPdf) => ({ type: UPDATE_PDF, newPdf: newPdf });
export const updateStickers = (newStickers) => ({ type: UPDATE_STICKERS, newStickers: newStickers });
export const mouseOverSticker = (stickerId) => ({ type: MOUSE_OVER, stickerId: stickerId });
export const mouseLeaveSticker = (stickerId) => ({ type: MOUSE_LEAVE, stickerId: stickerId });
export const studiedSticker = (info) => ({ type: STUDIED, stickerId: info.stickerId, isStudied: info.isStudied });
export const updateIsFetchingStickers = (isFetchingStickers) => ({ type: IS_FETCHING_STICKERS, isFetchingStickers: isFetchingStickers });

export default stickersReducer;