import React from 'react';
import { getValues } from '../API/GSheetsAPI'
import { listFiles, getLastCreatedFile } from '../API/GDriveAPI'
import { updateError } from './../redux/error-reducer';
import { updateSpreadsheetId } from './../redux/spreadsheet-reducer'
import { red } from 'color-name';

const UPDATE_PDF = 'UPDATE_PDF';
const UPDATE_STICKERS = 'UPDATE_STICKERS';
const RESET_STICKERS = 'RESET_STICKERS';
const MOUSE_OVER = 'MOUSE_OVER';
const MOUSE_LEAVE = 'MOUSE_LEAVE';
const STUDIED = 'STUDIED';
const IS_FETCHING_STICKERS = 'IS_FETCHING_STICKERS';
const STICKERS_ARE_FETCHED = 'STICKERS_ARE_FETCHED';
const IS_GENERATING_PDF = 'IS_GENERATING_PDF';
const IS_SHOW_IFRAME = 'IS_SHOW_IFRAME';
const PDF_OUTPUT = 'PDF_OUTPUT';


let initialStickers = [
    {
        content: {
            Foreign: "Hello",
            Spelling: "|həˈloʊ|",
            Native: "Привет"
        },
        id: 0,
        isMouseOver: false,
        isStudied: false
    }
];

const previewStickersEn = "Hello friend this stickers with words to study foreign languages " +
    "You can accumulate unknown words in google translate phrasebook after that import them to spreedshed " +
    "in your google drive Now just signin under your google account and you will see all accumulated " +
    "words as stickers This stickers you can print on paper and put on wall in room near with work desk for memorising"

const previewStickersRus = "Привет друг это карточки со словами для изучения иностранных языков " +
    "Ты можешь накопить незнакомые слова в гугл переводчике словаре после этого импортировать их в таблицу " +
    "в своем гугл драйве Теперь просто залогинься под своим гугл аккаунтом и ты будешь видеть все накопленные " +
    "слова как карточки Эти карточки ты можешь распечатать на бумагу и наклеить на стену в комнате рядом с рабочим столом для запоминания"

let getInitialiseStickers = () => {
    var eng = previewStickersEn.split(" ");
    var rus = previewStickersRus.split(" ");

    var dynamicInitialStickers = [];

    for (let i = 0; i < eng.length; i++) {

        var sticker = {
            content: {
                Foreign: eng[i],
                Spelling: "",
                Native: rus[i]
            },
            id: i,
            isMouseOver: false,
            isStudied: false
        };
        dynamicInitialStickers.push(sticker);
    }
    return dynamicInitialStickers;
}

var initialState = {
    pdf: React.createRef(),
    stickers: getInitialiseStickers(),
    isFetchingStickers: false,
    stickersAreFetched: false,
    isGeneratingPdf: false,
    isShowIframe: false,
    pdfOutput: ""
}


const stickersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PDF:
            return { ...state, pdf: action.newPdf }
        case UPDATE_STICKERS:
            return { ...state, stickers: action.newStickers }
        case RESET_STICKERS:
            return { ...state, stickersAreFetched: false, stickers: getInitialiseStickers() }
            break;
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
        case STICKERS_ARE_FETCHED:
            return {
                ...state, stickersAreFetched: action.stickersAreFetched
            }
        case IS_GENERATING_PDF:
            return {
                ...state, isGeneratingPdf: action.isGeneratingPdf
            }
        case IS_SHOW_IFRAME:
            return {
                ...state, isShowIframe: action.isShowIframe
            }
        case PDF_OUTPUT:
            return {
                ...state, pdfOutput: action.pdfOutput
            }
        default:
            return state;
    }
}

export const getStickers = (spreadsheetId = null) => {
    return (dispatch) => {
        dispatch(updateIsFetchingStickers(true));
        dispatch(updateStickersAreFetched(false));

        if (spreadsheetId === null) {
            listFiles((files) => {
                var lastCreatedFile = getLastCreatedFile(files);
                dispatch(updateSpreadsheetId(lastCreatedFile.id));
                getValues(lastCreatedFile.id,
                    (spreadsheetLines) => { getValuesSuccess(spreadsheetLines, dispatch) },
                    (message) => { getValuesError(message, dispatch); });
            });
        }
        else {
            getValues(spreadsheetId,
                (spreadsheetLines) => { getValuesSuccess(spreadsheetLines, dispatch) },
                (message) => { getValuesError(message, dispatch); });
        }
    }
}


const getValuesSuccess = (spreadsheetLines, dispatch) => {
    dispatch(updateError(spreadsheetLines.length > 0 ? "" : "No data found."));

    var stickers = spreadsheetLines.map((lineCells, index) => {
        return {
            content: {
                Foreign: lineCells[0],
                Spelling: "---",
                Native: lineCells[1]
            },
            id: index,
            isMouseOver: false,
            isStudied: false
        }
    });

    dispatch(updateIsFetchingStickers(false));
    dispatch(updateStickersAreFetched(true));
    dispatch(updateStickers(stickers.reverse()));
}

const getValuesError = (message, dispatch) => {
    dispatch(updateError("Error" + message));
    dispatch(updateIsFetchingStickers(false));
    dispatch(updateStickersAreFetched(false));
}


export const updatePdf = (newPdf) => ({ type: UPDATE_PDF, newPdf: newPdf });
export const updateStickers = (newStickers) => ({ type: UPDATE_STICKERS, newStickers: newStickers });
export const resetStickers = () => ({ type: RESET_STICKERS });
export const mouseOverSticker = (stickerId) => ({ type: MOUSE_OVER, stickerId: stickerId });
export const mouseLeaveSticker = (stickerId) => ({ type: MOUSE_LEAVE, stickerId: stickerId });
export const studiedSticker = (info) => ({ type: STUDIED, stickerId: info.stickerId, isStudied: info.isStudied });
export const updateIsFetchingStickers = (isFetchingStickers) => ({ type: IS_FETCHING_STICKERS, isFetchingStickers: isFetchingStickers });
const updateStickersAreFetched = (stickersAreFetched) => ({ type: STICKERS_ARE_FETCHED, stickersAreFetched: stickersAreFetched });
export const updateIsGeneratingPdf = (isGeneratingPdf) => ({ type: IS_GENERATING_PDF, isGeneratingPdf: isGeneratingPdf });
export const updateIsShowIframe = (isShowIframe) => ({ type: IS_SHOW_IFRAME, isShowIframe: isShowIframe });
export const updatePdfOutput = (pdfOutput) => ({ type: PDF_OUTPUT, pdfOutput: pdfOutput });

export default stickersReducer;