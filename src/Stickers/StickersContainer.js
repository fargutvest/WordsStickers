import React, { Component } from 'react';
import Stickers from './Stickers'
import { updatePdfAC } from './../redux/stickers-reducer'
import { mouseOverStickerAC, mouseLeaveStickerAC, studiedStickerAC } from './../redux/stickers-reducer';
import { connect } from 'react-redux'
import { getValues } from '../API/GSheetsAPI'
import { listFiles, getLastCreatedFile } from '../API/GDriveAPI'
import { updateSpreadsheetIdAC } from '../redux/spreadsheet-reducer'
import { updateErrorAC } from './../redux/error-reducer'
import { updateStickersAC, initialStickers } from './../redux/stickers-reducer';

class StickersContainer extends Component {

    getStickes = () => {
        listFiles((files) => {
            var lastCreatedFile = getLastCreatedFile(files);
            this.props.onUpdateSpreadsheetId(lastCreatedFile.id);
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
        this.props.onUpdateStickers(stickers);
    }

    showError = (message) => {
        this.props.onShowError(message);
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

let mapDispatchToProps = (dispatch) => {
    return {
        onPdfUpdate: (newPdf) => dispatch(updatePdfAC(newPdf)),
        onMouseOver: (stickerId) => dispatch(mouseOverStickerAC(stickerId)),
        onMouseLeave: (stickerId) => dispatch(mouseLeaveStickerAC(stickerId)),
        onStudied: (info) => dispatch(studiedStickerAC(info)),
        onUpdateSpreadsheetId: (spreadsheetId) => {dispatch(updateSpreadsheetIdAC(spreadsheetId))},
        onShowError: (message) => dispatch(updateErrorAC(message)),
        onUpdateStickers: (stickers) => {
            dispatch(updateStickersAC(stickers))
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(StickersContainer);
