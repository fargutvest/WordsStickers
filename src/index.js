import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store.js';

let rerender = () => {
  ReactDOM.render((<App state={store.getState()} dispatch={store.dispatch.bind(store)} />),
    document.getElementById('root')
  );
}

store.subscribe(rerender);
rerender(store.getState());

