import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state.js';
import { updateStickers, updatePdf, updateSpreadsheetId, updateError, updateFilesList, subscribe } from './state.js';



let rerender = (state) => {
  ReactDOM.render((<App stickers={state.stickers} pdf={state.pdf} spreadseetId={state.spreadseetId} error={state.error} filesList = {state.filesList}
    updateStickers={updateStickers}
    updatePdf={updatePdf}
    updateError = {updateError}
    updateFilesList = {updateFilesList}
    updateSpreadsheetId={updateSpreadsheetId} />),
    document.getElementById('root')
  );
}

subscribe(rerender);
rerender(state);

