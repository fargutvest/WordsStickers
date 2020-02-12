import React from 'react';
import ReadSpreadsheat from './ReadSpreadsheet'
import { updateError } from './../redux/error-reducer';
import { updateStickers } from './../redux/stickers-reducer';
import { updateSpreadsheetId } from '../redux/spreadsheet-reducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        pdf: state.stickersPage.pdf,
        spreadseetId: state.spreadsheetPage.spreadseetId
    }
}

const ReadSpreadsheatContainer = connect(mapStateToProps, { updateSpreadsheetId, updateError, updateStickers })(ReadSpreadsheat);


export default ReadSpreadsheatContainer;