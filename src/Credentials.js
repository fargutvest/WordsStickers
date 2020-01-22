import React, { Component } from 'react';

class Credentials extends Component {
    constructor(props){
        super(props);
        this.initClient = this.initClient.bind(this);
        this.handleInitClientClick = this.handleInitClientClick.bind(this);
        this.updateSigninStatus = this.updateSigninStatus.bind(this);
        this.success = this.success.bind(this);
        this.appendPre = this.appendPre.bind(this);
        this.listMajors = this.listMajors.bind(this);
        this.getSuccess = this.getSuccess.bind(this);
        this.getFail = this.getFail.bind(this);
    }
    updateShared(dataToShare) {
        this.props.updateShared(dataToShare);
    }
  
    getClientIdAndApiKeyFromUser(){
     
      return {
        CLIENT_ID: "",
        API_KEY: ""
      }
    }
 
    initClient() {
        var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
        var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
        var CLIENT_ID = this.props.cred.CLIENT_ID ? this.props.cred.CLIENT_ID : document.getElementById('CLIENT_ID').value;
        var API_KEY = this.props.cred.API_KEY ? this.props.cred.API_KEY : document.getElementById('API_KEY').value;
        var SPREADSHEET_ID = this.props.cred.SPREADSHEET_ID ? this.props.cred.SPREADSHEET_ID : document.getElementById('SPREADSHEET_ID').value;
        var RANGE = this.props.cred.RANGE ? this.props.cred.RANGE : document.getElementById('RANGE').value;

        localStorage.setItem('CLIENT_ID', CLIENT_ID);
        localStorage.setItem('API_KEY', API_KEY);
        localStorage.setItem('SPREADSHEET_ID', SPREADSHEET_ID);
        localStorage.setItem('RANGE', RANGE);
    
        window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
          }).then(this.success, this.fail);
        }

        success(){
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
            this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        }

        fail(error){
            this.appendPre(JSON.stringify(error, null, 2));
        }

        listMajors() {
          var SPREADSHEET_ID = this.props.cred.SPREADSHEET_ID ? this.props.cred.SPREADSHEET_ID : document.getElementById('SPREADSHEET_ID').value;
          var RANGE = this.props.cred.RANGE ? this.props.cred.RANGE : document.getElementById('RANGE').value;

            localStorage.setItem('SPREADSHEET_ID', SPREADSHEET_ID);
            window.gapi.client.sheets.spreadsheets.values.get({
              spreadsheetId: SPREADSHEET_ID,
              range: RANGE,
            }).then(this.getSuccess, this.getFail);
          }

          getSuccess(response){
            var values = response.result.values;
            var words = [];
            if (values.length > 0) {
              for (var i = 0; i < values.length; i++) {
                var row = values[i];
                for(var j = 0; j < row.length; j++){
                  words.push(row[j]);
                }
              }
            } else {
              this.appendPre('No data found.');
            }
       
            var stickersToShare = [];
            var rowCounter = 0;
            var rowModel = [];
            words.forEach(element => {
              rowCounter++;
              rowModel.push({
                English: element,
                Spelling: "sp",
                Russian: "rus"
              })
              if(rowCounter == 4){
                stickersToShare.push(rowModel);
                rowModel = [];
                rowCounter = 0;
              }
            });
            this.props.updateShared(stickersToShare);
            
  
          }

          getFail(response){
            this.appendPre('Error: ' + response.result.error.message);
          }
             
  
     updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          //authorizeButton.style.display = 'none';
          //signoutButton.style.display = 'block';
          this.listMajors();
        } else {
          //authorizeButton.style.display = 'block';
          //signoutButton.style.display = 'none';
        }
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
  
       appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }


      componentDidMount() {
        var elem = document.getElementById('RANGE');
        elem.value = this.props.cred.RANGE ? this.props.cred.RANGE : localStorage.getItem('RANGE');

        elem = document.getElementById('CLIENT_ID');
        elem.value = this.props.cred.CLIENT_ID ? this.props.cred.CLIENT_ID : localStorage.getItem('CLIENT_ID');

        elem = document.getElementById('API_KEY');
        elem.value = this.props.cred.API_KEY ? this.props.cred.API_KEY : localStorage.getItem('API_KEY');

        elem = document.getElementById('SPREADSHEET_ID');
        elem.value = this.props.cred.SPREADSHEET_ID ? this.props.cred.SPREADSHEET_ID : localStorage.getItem('SPREADSHEET_ID');

        
      }
  
    render() {
      return (
  <div>
        <p>

        <label className="w3-text-blue"><b>CLIENT_ID:</b></label>
        <input className="w3-input w3-border" id="CLIENT_ID" type="text" size="100" placeholder="copy this value from file 'EnglishWordsStickersJS_API_KEY.txt' placed on fargutvest GoogleDrive"/></p>
        <p> 
        <label className="w3-text-blue"><b>API_KEY:</b></label>
        <input className="w3-input w3-border" id="API_KEY" type="text" size="100" placeholder="copy this value from file 'EnglishWordsStickersJS_API_KEY.txt' placed on fargutvest GoogleDrive" /></p>
        <p>
       <label className="w3-text-blue"><b>SPREADSHEET_ID:</b></label>
       <input className="w3-input w3-border" id="SPREADSHEET_ID" type="text" size="100" placeholder="copy this value from file 'EnglishWordsStickersJS_API_KEY.txt' placed on fargutvest GoogleDrive"/></p>
       <p>
        <label className="w3-text-blue"><b>RANGE:</b></label>
        <input className="w3-input w3-border" id="RANGE" type="text" size="100" placeholder="copy this value from file 'EnglishWordsStickersJS_API_KEY.txt' placed on fargutvest GoogleDrive"/></p>
  <p>
      <button id="init_client_button" className="button" onClick = {this.handleInitClientClick}>Init Client</button>
      <button id="authorize_button" className="button"  onClick = {this.handleAuthClick} >Authorize</button>
      <button id="signout_button" className="button" onClick = {this.handleSignoutClick}>Sign Out</button>
  </p>
  </div>
      );
    }
  }


export default Credentials;