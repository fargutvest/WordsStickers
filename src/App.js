import React, { Component } from 'react';
import Urls from './Urls.js';
import Stickers from './Stickers.js';
import './App.css';

class App extends Component {
  render() {
    
    var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

    var initClientButton = document.getElementById('init_client_button');
    var authorizeButton = document.getElementById('authorize_button');
    var signoutButton = document.getElementById('signout_button');

    function initClient() {
    var CLIENT_ID = document.getElementById('CLIENT_ID').value;
    var API_KEY = document.getElementById('API_KEY').value;
    localStorage.setItem('CLIENT_ID', CLIENT_ID);
    localStorage.setItem('API_KEY', API_KEY);
    localStorage.setItem('SPREADSHEET_ID', document.getElementById('SPREADSHEET_ID').value);
    localStorage.setItem('RANGE', document.getElementById('RANGE').value);

    window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function () {
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
      }, function(error) {
        appendPre(JSON.stringify(error, null, 2));
      });
    }

    function initPage(){
      document.getElementById('CLIENT_ID').value = localStorage.getItem('CLIENT_ID');
      document.getElementById('API_KEY').value = localStorage.getItem('API_KEY');
      document.getElementById('SPREADSHEET_ID').value = localStorage.getItem('SPREADSHEET_ID');
      document.getElementById('RANGE').value = localStorage.getItem('RANGE');
      initClientButton.onclick = handleInitClientClick;
    }


    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        listMajors();
      } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
      }
    }

    function handleAuthClick(event) {
      window.gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignoutClick(event) {
      window.gapi.auth2.getAuthInstance().signOut();
    }

     function handleInitClientClick(event) {
      window.gapi.load('client:auth2', initClient);
    }

    function appendPre(message) {
      var pre = document.getElementById('content');
      var textContent = document.createTextNode(message + '\n');
      pre.appendChild(textContent);
    }


    function listMajors() {
      var SPREADSHEET_ID = document.getElementById('SPREADSHEET_ID').value;
      var RANGE = document.getElementById('RANGE').value;
      localStorage.setItem('SPREADSHEET_ID', SPREADSHEET_ID);
      window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
      }).then(function(response) {
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
          appendPre('No data found.');
        }
        var counter = 0;
        words.forEach(element => {
          counter++;
          appendPre(counter + ") " + element);
        });

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
            characters.push(rowModel);
            rowModel = [];
            rowCounter = 0;
          }
        });
        
      }, function(response) {
        appendPre('Error: ' + response.result.error.message);
      });
      
    }


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
    initPage();
    return (
  <div>
	<Stickers characterData={characters}/>
  <Urls/>
  </div>
    );
  }
}




export default App;
