import React, { Component } from 'react';
import Urls from './Urls.js';
import SignIn from './SignIn/SignIn.js';
import DataAccess from './DataAccess/DataAccess.js';
import characters from './Characters.js';

import Tabs from './Tabs/Tabs.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {shared_var: characters};
    this.updateShared = this.updateShared.bind(this);
    this.isSignedIn = this.isSignedIn.bind(this);
}
updateShared(shared_value) {
  this.setState({shared_var: shared_value});
}

isSignedIn(value) {
 if (value){
  document.getElementById("notSignedIn").style["display"] = "none";
  document.getElementById("signedIn").style["display"] = "block";
 }
 else{
   document.getElementById("notSignedIn").style["display"] = "block";
   document.getElementById("signedIn").style["display"] = "none";
 }
}

  render() {
    return (
  <div>
  <div id="notSignedIn">
  <SignIn cred ={this.props.match.params} shared_var={this.state.shared_var} callback={this.isSignedIn}/>
  </div>
  <div id="signedIn">
  <div>
  <DataAccess params ={this.props.match.params} updateShared={this.updateShared}/>
  </div>
  <Tabs shared_var={this.state.shared_var}/>
  <Urls/>
  </div> 
  </div>
    );
  }
}

export default App;
