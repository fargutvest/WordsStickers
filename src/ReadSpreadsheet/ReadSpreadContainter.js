import React from 'react';
import ReadSpreadsheat from './ReadSpreadsheet'
import { updateErrorActionCreator } from './../redux/error-reducer';
import { updateStickersActionCreator } from './../redux/stickers-reducer';
import { updateSpreadsheetIdActionCreator } from '../redux/spreadsheet-reducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        pdf: state.stickersPage.pdf,
        spreadseetId: state.spreadsheetPage.spreadseetId
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSpreadsheetId: (spreadsheetId) => {
            dispatch(updateSpreadsheetIdActionCreator(spreadsheetId))
        },
        onShowError: (message) => {
            dispatch(updateErrorActionCreator(message))
        },
        onUpdateStickers: (stickers) => {
            dispatch(updateStickersActionCreator(stickers))
        }
    }
}

const ReadSpreadsheatContainer = connect(mapStateToProps, mapDispatchToProps)(ReadSpreadsheat);


export default ReadSpreadsheatContainer;