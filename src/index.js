import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import characters from './Characters.js';

ReactDOM.render((<App characters={characters} />),
  document.getElementById('root')
);

