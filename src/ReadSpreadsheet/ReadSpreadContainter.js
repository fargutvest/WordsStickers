import React, { Component } from 'react';
import ReadSpreadsheat from './ReadSpreadsheet'
import { updateErrorActionCreator } from './../redux/error-reducer';
import { updateStickersActionCreator } from './../redux/stickers-reducer';
import { updateSpreadsheetIdActionCreator } from '../redux/spreadsheet-reducer'

const ReadSpreadsheatContainer = (props) => {

    let stickersState = props.store.getState().stickersPage;
    let spreadsheetState = props.store.getState().spreadsheetPage;

    let updateSpreadsheetId = (spreadsheetId) => {
        props.store.dispatch(updateSpreadsheetIdActionCreator(spreadsheetId));
    }

    let showError = (message) => {
        props.store.dispatch(updateErrorActionCreator(message));
    }

    let updateStickers = (stickers) => {
        props.store.dispatch(updateStickersActionCreator(stickers));
    }



    return (<ReadSpreadsheat spreadseetId={spreadsheetState.spreadseetId} pdf={stickersState.pdf}
        onUpdateStickers={updateStickers} onUpdateSpreadsheetId={updateSpreadsheetId} onShowError={showError} />)
}

export default ReadSpreadsheatContainer;