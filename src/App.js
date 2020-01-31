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
   
    this.state = {state_ref: '', shared_var: characters, state_spreedSheetId: ''};
    this.updateShared = this.updateShared.bind(this);
    this.isSignedIn = this.isSignedIn.bind(this);
    this.passRef = this.passRef.bind(this);
    this.ShareSpreedSheetId = this.ShareSpreedSheetId.bind(this);
}
updateShared(shared_value) {
  this.setState({shared_var: shared_value});
}

passRef(newRef){
  this.setState({state_ref: newRef});
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

ShareSpreedSheetId(spreedSheetId){
this.state.state_spreedSheetId = spreedSheetId;
this.setState({state_spreedSheetId: spreedSheetId});
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
        <DataAccess da_ref = {this.state.state_ref} params ={this.props.match.params} updateShared={this.updateShared} spreedSheetId = {this.state.state_spreedSheetId}/>
        <Tabs passRef = {this.passRef} shared_var={this.state.shared_var} ShareSpreedSheetId = {this.ShareSpreedSheetId}/>
        <Urls/>
      </td>
    </tr>
    </table>
  </div>
    );
  }
}

export default App;
