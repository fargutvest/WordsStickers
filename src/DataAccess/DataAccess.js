import React, { Component } from 'react';


class DataAccess extends Component {
    constructor(props){
        super(props);
        this.getSuccess = this.getSuccess.bind(this);
        this.getFail = this.getFail.bind(this);
        this.listMajors = this.listMajors.bind(this);
        this.handleListMajorsClick = this.handleListMajorsClick.bind(this);
        this.appendPre = this.appendPre.bind(this);

    }

    handleListMajorsClick(event) {
        this.listMajors();
      }

    listMajors() {
        var SPREADSHEET_ID = document.getElementById('SPREADSHEET_ID').value;
        var RANGE = document.getElementById('RANGE').value;

          this.updateLocalStorage();
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


    updateLocalStorage(){
        var SPREADSHEET_ID = document.getElementById('SPREADSHEET_ID').value;
        var RANGE = document.getElementById('RANGE').value;

        localStorage.setItem('SPREADSHEET_ID', SPREADSHEET_ID);
        localStorage.setItem('RANGE', RANGE);
    }

    componentDidMount() {
        var params = this.props.params;
        var elem = document.getElementById('RANGE');
        elem.value = params.RANGE ? params.RANGE : localStorage.getItem('RANGE');

        elem = document.getElementById('SPREADSHEET_ID');
        elem.value = params.SPREADSHEET_ID ? params.SPREADSHEET_ID : localStorage.getItem('SPREADSHEET_ID');        
      }

      appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

    render() {
        return (
    <div>
      <table>
        <tr>
          <td width="60%">
          <label className="w3-text-blue"><b>SPREADSHEET_ID:</b></label>
          <input className="w3-input w3-border" id="SPREADSHEET_ID" type="text" size="100"/>
          </td>
          <td width="30%">
          <label className="w3-text-blue"><b>RANGE:</b></label>
          <input className="w3-input w3-border" id="RANGE" type="text" size="100"/>
          </td>
          <td width="10%">
          <button id="list_majors" className="button" onClick = {this.handleListMajorsClick}>List Majors</button>
          </td>
        </tr>
      </table>
          <pre id="content" className="error"></pre>
    </div>
        );
    }
    

}

export default DataAccess;