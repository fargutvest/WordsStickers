import React, { Component } from 'react';
import './SignIn.css';

const hint = "copy this value from file 'EnglishWordsStickersJS_API_KEY.txt' placed on fargutvest GoogleDrive";

class SignIn extends Component {
    constructor(props){
        super(props);
        this.initClient = this.initClient.bind(this);
        this.handleInitClientClick = this.handleInitClientClick.bind(this);
        this.updateSigninStatus = this.updateSigninStatus.bind(this);
        this.initClientSuccess = this.initClientSuccess.bind(this);
        this.initClientFail = this.initClientFail.bind(this);
    }

    callback(isSignedIn) {
        this.props.callback(isSignedIn);
    }
 
    updateLocalStorage(){
        var CLIENT_ID = document.getElementById('CLIENT_ID').value;
        var API_KEY = document.getElementById('API_KEY').value;
        
        localStorage.setItem('CLIENT_ID', CLIENT_ID);
        localStorage.setItem('API_KEY', API_KEY);
    }

    initClient() {
        var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
        var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

        var CLIENT_ID = document.getElementById('CLIENT_ID').value;
        var API_KEY = document.getElementById('API_KEY').value;
        
        this.updateLocalStorage();
    
        window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
          }).then(this.initClientSuccess, this.initClientFail);
        }

        initClientSuccess(){
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
            this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        }

        initClientFail(error){
            this.appendPre(JSON.stringify(error, null, 2));
        }

       
      updateSigninStatus(isSignedIn) {
      var authorize_button = document.getElementById('authorize_button');
      var signout_button = document.getElementById('signout_button');
      
        if (isSignedIn) {    
          authorize_button.style.display = 'none';
          signout_button.style.display = 'block';    
          var googleUser =  window.gapi.auth2.getAuthInstance().currentUser.get();
          var profile = googleUser.getBasicProfile();
          console.log(profile);
          
        } else {
          authorize_button.style.display = 'block';
          signout_button.style.display = 'none';
        }
        this.callback(isSignedIn);
      }
  
       handleAuthClick(event) {
        window.gapi.auth2.getAuthInstance().signIn();
      }
  
       handleSignoutClick(event) {
        window.gapi.auth2.getAuthInstance().signOut();
      }
  
        handleInitClientClick(event) {
            window.gapi.load('client:auth2', this.initClient);
      }

      componentDidMount() {
        var elem = document.getElementById('CLIENT_ID');
        elem.value = this.props.cred.CLIENT_ID ? this.props.cred.CLIENT_ID : localStorage.getItem('CLIENT_ID');

        elem = document.getElementById('API_KEY');
        elem.value = this.props.cred.API_KEY ? this.props.cred.API_KEY : localStorage.getItem('API_KEY');

        this.updateSigninStatus(false);
      }
  
    render() {
      return (
  <div align = "center">
        <p>
        <label className="w3-text-blue"><b>CLIENT_ID:</b></label>
        <input className="w3-input w3-border" id="CLIENT_ID" type="text" size="100" placeholder={hint} /></p>
        <p> 
        <label className="w3-text-blue"><b>API_KEY:</b></label>
        <input className="w3-input w3-border" id="API_KEY" type="text" size="100" placeholder={hint} /></p>
        <p>
        <button id="init_client_button" className="button" onClick = {this.handleInitClientClick}>Init Client</button>
        <button id="authorize_button" className="button"  onClick = {this.handleAuthClick} >Authorize</button>
        <button id="signout_button" className="button" onClick = {this.handleSignoutClick}>Sign Out</button></p>
       
        <pre id="content" className="error"></pre>
  </div>
      );
    }
  }


export default SignIn;