import React, { Component } from 'react';
import SignInWithGoogle from './SignInWithGoogle/SignInWithGoogle.js'
import './SignIn.css';

const hint = "copy this value from file 'EnglishWordsStickersJS_API_KEY.txt' placed on fargutvest GoogleDrive";
const CLIENT_ID = "722524747087-sgjsjequa1sv10c8m3g9fl6gtqoa39eg.apps.googleusercontent.com";
const API_KEY = "AIzaSyANRAmPJFTjvI2lxfJpq82rd4SHtpBdKY0";
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4", "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.metadata.readonly";

class SignIn extends Component {
    constructor(props){
        super(props);
        this.initClient = this.initClient.bind(this);
        this.updateSigninStatus = this.updateSigninStatus.bind(this);
        this.initClientSuccess = this.initClientSuccess.bind(this);
        this.initClientFail = this.initClientFail.bind(this);
    }

    callback(isSignedIn, userProfile) {
        this.props.callback(isSignedIn, userProfile);
    }
 
    updateLocalStorage(){
        localStorage.setItem('CLIENT_ID', CLIENT_ID);
        localStorage.setItem('API_KEY', API_KEY);
    }

    initClient() {
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
      var signin_button = document.getElementById('signin_button');
      var signout_button = document.getElementById('signout_button');
      var profile;
        if (isSignedIn) {    
          signout_button.style.display = 'block';    
          signin_button.style.display = 'none'; 
          var googleUser =  window.gapi.auth2.getAuthInstance().currentUser.get();
          profile = googleUser.getBasicProfile();
          console.log(profile);
          
        } else {
          signout_button.style.display = 'none';
          signin_button.style.display = 'block'; 
        }
        this.callback(isSignedIn, profile);
      }
  
       handleAuthClick() {
        window.gapi.auth2.getAuthInstance().signIn();
      }
  
       handleSignoutClick(event) {
        window.gapi.auth2.getAuthInstance().signOut();
      }
  
      componentDidMount() {
        window.gapi.load('client:auth2', this.initClient);
       // this.updateSigninStatus(false);
      }
  
    render() {
      return (
        
  <div align = "center">
        <p>
        <div id="signin_button">
        <SignInWithGoogle onClick = {this.handleAuthClick}/></div>
        <button id="signout_button" className="button" onClick = {this.handleSignoutClick}>Sign Out</button></p>
        <pre id="content" className="error"></pre>
  </div>
      );
    }
  }


export default SignIn;