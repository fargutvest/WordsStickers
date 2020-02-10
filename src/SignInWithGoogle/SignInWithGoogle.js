import React, { Component } from 'react';
import s from './SignInWithGoogle.module.css';
import cs from './../Common.module.css';
import { getValues } from '../API/GSheetsAPI'
import { listFiles, getLastCreatedFile } from '../API/GDriveAPI'

const CLIENT_ID = "722524747087-sgjsjequa1sv10c8m3g9fl6gtqoa39eg.apps.googleusercontent.com";
const API_KEY = "AIzaSyANRAmPJFTjvI2lxfJpq82rd4SHtpBdKY0";
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4", "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/drive.metadata";

//todo: need to remove token.pickle

class SignInWithGoogle extends Component {
  constructor(props) {
    super(props);
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
    this.initClientSuccess = this.initClientSuccess.bind(this);
    this.initClientFail = this.initClientFail.bind(this);
    this.getStickes = this.getStickes.bind(this);
    this.readSuccess = this.readSuccess.bind(this);
    this.showError = this.showError.bind(this);
  }

  initClient() {
    window.gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(this.initClientSuccess, this.initClientFail);
  }

  initClientSuccess() {
    window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
    this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    this.props.onShowError("");
  }

  initClientFail(error) {
    this.props.onShowError(JSON.stringify(error, null, 2));
  }


  updateSigninStatus(isSignedIn) {
    var profile;
    if (isSignedIn) {
      var googleUser = window.gapi.auth2.getAuthInstance().currentUser.get();
      profile = googleUser.getBasicProfile();
      console.log(profile);
      this.getStickes();
    }

    this.props.onUpdateProfile(profile);

    this.props.onUpdateIsSignedIn(isSignedIn);
  }

  handleSigninClick() {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  handleSignoutClick(event) {
    window.gapi.auth2.getAuthInstance().signOut();
  }

  componentDidMount() {
    window.gapi.load('client:auth2', this.initClient);
  }

  getStickes() {
    listFiles((files) => {
      var lastCreatedFile = getLastCreatedFile(files);
      this.props.onUpdateSpreadsheetId(lastCreatedFile.id);
      getValues(lastCreatedFile.id, this.readSuccess, (message) => { this.showError("Error" + message) });
    });  
  }
  
  readSuccess(spreadsheetLines) {
    this.showError(spreadsheetLines.length > 0 ? "" : "No data found.");
  
    var stickers = spreadsheetLines.map((lineCells, index) => {
      return {
        content: {
          English: lineCells[0],
          Spelling: "---",
          Russian: lineCells[1]
        },
        id: index,
        isMouseOver: false,
        isStudied: false
      }
    });
    this.props.onUpdateStickers(stickers);
  }

  showError(message) {
    this.props.onShowError(message);
  }

  getButton() {
    var signIn = (
      <button type="button" className={s.google_button} onClick={this.handleSigninClick}>
        <span class={s.google_button_icon}>
          <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335" /><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05" /><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4" /><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853" /></svg>
        </span>
        <span class={s.google_button_text}>Sign in with Google</span>
      </button>
    );

    var signOut = <button className={cs.button} onClick={this.handleSignoutClick}>Sign Out</button>;

    return this.props.isSignedIn ? signOut : signIn;
  }

  getUserInfo() {
    if (this.props.profile) {
      return (
        <div>
          <label className="w3-text-white">{this.props.profile.getName()}</label>
          <p align="center">
            <img width="50px" height="50px" alt="Avatar" src={this.props.profile.getImageUrl()} />
          </p>
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <div align="center">
        {this.getUserInfo()}
        <p>
          {this.getButton()}
        </p>
      </div>
    );
  }
}


export default SignInWithGoogle;