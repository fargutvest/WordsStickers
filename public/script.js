      
      onload="this.onload=function(){};initPage()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()"

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

        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
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
        gapi.auth2.getAuthInstance().signIn();
      }

      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

       function handleInitClientClick(event) {
        gapi.load('client:auth2', initClient);
      }

      function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }


      function listMajors() {
        var SPREADSHEET_ID = document.getElementById('SPREADSHEET_ID').value;
        localStorage.setItem('SPREADSHEET_ID', SPREADSHEET_ID);
        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: SPREADSHEET_ID,
          range: 'A1:I30',
        }).then(function(response) {
          var range = response.result;
          if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
              var row = range.values[i];
              // Print columns A and E, which correspond to indices 0 and 4.
              appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] + ', ' + row[4] + ', ' + row[5] + ', ' + row[6] + ', ' + row[7] + ', ' + row[8]);
            }
          } else {
            appendPre('No data found.');
          }
        }, function(response) {
          appendPre('Error: ' + response.result.error.message);
        });
      }

