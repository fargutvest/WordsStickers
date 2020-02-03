import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store.js';



let rerender = (state) => {
  ReactDOM.render((<App state={store.getState()}
    updateStickers={store.updateStickers.bind(store)}
    updatePdf={store.updatePdf.bind(store)}
    updateError = {store.updateError.bind(store)}
    updateFilesList = {store.updateFilesList.bind(store)}
    updateSpreadsheetId={store.updateSpreadsheetId.bind(store)} />),
    document.getElementById('root')
  );
}

store.subscribe(rerender);
rerender(store.getState());

