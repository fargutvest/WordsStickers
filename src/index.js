import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store-redux.js';

let rerender = (state) => {
  ReactDOM.render((<App store = {store} dispatch={store.dispatch.bind(store)} />),
    document.getElementById('root')
  );
}

store.subscribe(() => {
  var state = store.getState()
  rerender(state);
});
rerender(store.getState());

