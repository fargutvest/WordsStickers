import React from 'react';
import ReadSpreadsheat from './ReadSpreadsheet'
import { updateErrorActionCreator } from './../redux/error-reducer';
import { updateStickersActionCreator } from './../redux/stickers-reducer';
import { updateSpreadsheetIdActionCreator } from '../redux/spreadsheet-reducer'
import StoreContext from '../StoreContext';

const ReadSpreadsheatContainer = () => {
    return  <StoreContext.Consumer>
            { store => {
                    let stickersState = store.getState().stickersPage;
                    let spreadsheetState = store.getState().spreadsheetPage;

                    let updateSpreadsheetId = (spreadsheetId) => {
                        store.dispatch(updateSpreadsheetIdActionCreator(spreadsheetId));
                    }

                    let showError = (message) => {
                        store.dispatch(updateErrorActionCreator(message));
                    }

                    let updateStickers = (stickers) => {
                        store.dispatch(updateStickersActionCreator(stickers));
                    }

                    return <ReadSpreadsheat spreadseetId={spreadsheetState.spreadseetId} pdf={stickersState.pdf}
                        onUpdateStickers={updateStickers} onUpdateSpreadsheetId={updateSpreadsheetId} onShowError={showError} />
                }
            }
        </StoreContext.Consumer>
}

export default ReadSpreadsheatContainer;