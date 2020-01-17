import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const characters = [
      {
        English: "Hello",
        Spelling: "spelling =)",
        Russian: "Privet"
      },
      {
        English: "Hello",
        Spelling: "spelling =)",
        Russian: "Privet"
      }
    ] 
    return (
  <div>
	<TableBody characterData={characters}/>
  </div>
    );
  }
}


const TableBody = props => {
const rows = props.characterData.map((row, index) => {
    return (
  <tr key={index}>
    <td><Sticker data={row}/></td>
  </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Sticker extends Component {
  render() {
    return (
      <div className="Sticker">
          <p>{this.props.data.English}</p>
	        <p>{this.props.data.Spelling}</p>
	        <p>{this.props.data.Russian}</p>
      </div>
    );
  }
}

export default App;
