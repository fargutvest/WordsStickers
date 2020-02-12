import React, { Component } from 'react';
import Stickers from './Stickers'
import { updatePdf } from './../redux/stickers-reducer'
import { mouseOverSticker, mouseLeaveSticker, studiedSticker } from './../redux/stickers-reducer';
import { connect } from 'react-redux'
import { getValues } from '../API/GSheetsAPI'
import { listFiles, getLastCreatedFile } from '../API/GDriveAPI'
import { updateSpreadsheetId } from '../redux/spreadsheet-reducer'
import { updateError } from './../redux/error-reducer'
import { updateStickers, initialStickers } from './../redux/stickers-reducer';

class StickersContainer extends Component {

    getStickes = () => {
        listFiles((files) => {
            var lastCreatedFile = getLastCreatedFile(files);
            this.props.updateSpreadsheetId(lastCreatedFile.id);
            getValues(lastCreatedFile.id, this.readSuccess, (message) => { this.showError("Error" + message) });
        });
    }

    readSuccess = (spreadsheetLines) => {
        this.showError(spreadsheetLines.length > 0 ? "" : "No data found.");

        var stickers = spreadsheetLines.map((lineCells, index) => {
            return {
                content: {
                    English: lineCells[0],
                    Spelling: "---",
                    Russian: lineCells[1]
                },
                id: index,
                isMouseOver: false,
                isStudied: false
            }
        });
        this.props.updateStickers(stickers);
    }

    showError = (message) => {
        this.props.updateError(message);
    }

    render() {
        if (this.props.isSignedIn && this.props.stickers.length === initialStickers.length) {
            this.getStickes();
        }
        return <Stickers {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        stickers: state.stickersPage.stickers,
        isSignedIn: state.signInPage.isSignedIn
    }
}

export default connect(mapStateToProps, { updatePdf, mouseOverSticker, mouseLeaveSticker, studiedSticker, updateSpreadsheetId, updateError, updateStickers })(StickersContainer);
