import React from 'react';
import ReadSpreadsheat from './ReadSpreadsheet'
import { updateSpreadsheetId, getLatestSpreadsheetId } from '../redux/spreadsheet-reducer'
import { getStickers } from '../redux/stickers-reducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        pdf: state.stickersPage.pdf,
        spreadseetId: state.spreadsheetPage.spreadseetId
    }
}

const ReadSpreadsheetContainter = connect(mapStateToProps, { updateSpreadsheetId, getStickers, getLatestSpreadsheetId })(ReadSpreadsheat);


export default ReadSpreadsheetContainter;