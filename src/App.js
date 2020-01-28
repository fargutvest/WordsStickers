import React, { Component } from 'react';
import Urls from './Urls.js';
import SignIn from './SignIn/SignIn.js';
import DataAccess from './DataAccess/DataAccess.js';
import characters from './Characters.js';

import Tabs from './Tabs/Tabs.js';
import './App.css';

const app_ref = React.createRef();
class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {stRef: 1, shared_var: characters };
    this.updateShared = this.updateShared.bind(this);
    this.isSignedIn = this.isSignedIn.bind(this);
    this.elmRef = this.elmRef.bind(this);
}
updateShared(shared_value) {
  this.setState({shared_var: shared_value});
}

elmRef(newRef){
  this.app_ref = newRef;
}

isSignedIn(value, userProfile) {
  var avatarImg = document.getElementById("avatar");
  var titleLabel = document.getElementById("title");
  if (userProfile){
    avatarImg.style.display = '';
    titleLabel.style.display = '';
    avatarImg.src = userProfile.getImageUrl();
    titleLabel.innerHTML = userProfile.getName();
  }
  else{
    avatarImg.style.display = 'none';
    titleLabel.style.display = 'none';
  }
  
}


  render() {
    return (
  <div className="full-height">
    <table width ="100%" height= "100%">
    <tr>
      <td width="300px" class="side-panel" valign="bottom" align="center">
      <p>
        <div>
      <label className="w3-text-white" id="title"></label></div>
      <p>
      <img id="avatar" width="50px" height="50px" alt="Avatar"/></p>
      <SignIn cred ={this.props.match.params} shared_var={this.state.shared_var} callback={this.isSignedIn}/>
      </p>
      </td>
      <td width="*" valign="top">
        <DataAccess ref = {this.app_ref} params ={this.props.match.params} updateShared={this.updateShared}/>
        <Tabs elmRef = {this.elmRef} shared_var={this.state.shared_var}/>
        <Urls/>
      </td>
    </tr>
    </table>
  </div>
    );
  }
}

export default App;
