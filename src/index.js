import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store-redux.js';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

let rerender = () => {
  ReactDOM.render((
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  ),
    document.getElementById('root')
  );
}

store.subscribe(() => {
  rerender();
});

window.store = store;
rerender();

