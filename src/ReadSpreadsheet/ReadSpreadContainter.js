import React from 'react';
import ReadSpreadsheat from './ReadSpreadsheet'
import { updateErrorAC } from './../redux/error-reducer';
import { updateStickersAC } from './../redux/stickers-reducer';
import { updateSpreadsheetIdAC } from '../redux/spreadsheet-reducer'
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
            dispatch(updateSpreadsheetIdAC(spreadsheetId))
        },
        onShowError: (message) => {
            dispatch(updateErrorAC(message))
        },
        onUpdateStickers: (stickers) => {
            dispatch(updateStickersAC(stickers))
        }
    }
}

const ReadSpreadsheatContainer = connect(mapStateToProps, mapDispatchToProps)(ReadSpreadsheat);


export default ReadSpreadsheatContainer;