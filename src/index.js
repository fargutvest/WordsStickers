import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store-redux.js';

let rerender = (state) => {
  ReactDOM.render((<App state={state} dispatch={store.dispatch.bind(store)} />),
    document.getElementById('root')
  );
}

store.subscribe(rerender);
rerender(store.getState());

