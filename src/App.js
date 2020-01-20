import React, { Component } from 'react';
import Urls from './Urls.js';
import Credentials from './Credentials';
import characters from './Characters.js';

import Tabs from './Tabs.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
   
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
  <Tabs shared_var={this.state.shared_var}/>
  <Urls/>
  </div>
    );
  }
}

export default App;
