import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
  <div>
	<Row/>
	<Row/>
	<Row/>
        <Row/>
  </div>
    );
  }
}

class Row extends Component {
  render() {
    return (
  <tr>
    <td><Sticker/></td><td><Sticker/></td><td><Sticker/></td><td><Sticker/></td>
  </tr>
    );
  }
}

class Sticker extends Component {
  render() {
    return (
      <div className="Sticker">
          <p>English word</p>
	  <p>Spelling</p>
	  <p>Russian word</p>
      </div>
    );
  }
}

export default App;
