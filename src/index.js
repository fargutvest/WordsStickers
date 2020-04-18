import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import './index.css';
import store from './redux/store-redux.js';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'

let rerender = () => {
  ReactDOM.render((
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  ),
    document.getElementById('root')
  );
}

store.subscribe(() => {
  rerender();
});

window.store = store;
rerender();

