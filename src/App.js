import React, { Component } from 'react';
import Urls from './Urls.js';
import Stickers from './Stickers.js';
import Credentials from './Credentials.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const characters = [
      [
        {
          English: "Hello1",
          Spelling: "spelling =)",
          Russian: "Privet"
        },
        {
          English: "Hello2",
          Spelling: "spelling =)",
          Russian: "Privet"
        },
        {
          English: "Hello3",
          Spelling: "spelling =)",
          Russian: "Privet"
        },
        {
          English: "Hello4",
          Spelling: "spelling =)",
          Russian: "Privet"
        }
      ],
    ] 
    this.state = {shared_var: characters};
    this.updateShared = this.updateShared.bind(this);
}
updateShared(shared_value) {
  this.setState({shared_var: shared_value});
}
  render() {
 
  
    
    return (
  <div>
  <Credentials shared_var={this.state.shared_var} updateShared={this.updateShared}/>
	<Stickers shared_var={this.state.shared_var}/>
  <Urls/>
  </div>
    );
  }
}

export default App;
