import React from 'react';
import ReadSpreadsheat from './ReadSpreadsheet'
import { getLatestSpreadsheetId, updateSpreadsheetId } from '../redux/spreadsheet-reducer'
import { getStickers } from '../redux/stickers-reducer'
import { connect } from 'react-redux';
import { getPdfRef } from '../redux/stickers-selectors';
import { getSpreadseetId } from '../redux/spreadsheet-selectors';

let mapStateToProps = (state) => {
    return {
        pdf: getPdfRef(state),
        spreadseetId: getSpreadseetId(state)
    }
}

const ReadSpreadsheetContainter = connect(mapStateToProps, { getStickers, getLatestSpreadsheetId, updateSpreadsheetId })(ReadSpreadsheat);


export default ReadSpreadsheetContainter;