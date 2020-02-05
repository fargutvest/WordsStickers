import React, { Component } from 'react';
import Pdf from "react-to-pdf";
import s from './ReadSpreadsheet.module.css'
import cs from './../Common.module.css'
import {updateErrorActionCreator} from './../redux/error-reducer';
import {updateStickersActionCreator} from './../redux/stickers-reducer';
import { listFiles, bubbleSort } from './../GDriveAPI/api'

const spreadsheetIdref = React.createRef();

const options = {
  orientation: 'landscape'
};

const RANGE = "C:D";

class ReadSpreadsheet extends Component {
  constructor(props) {
    super(props);
    this.getSuccess = this.getSuccess.bind(this);
    this.getFail = this.getFail.bind(this);
    this.handleReadSpreadsheetClick = this.handleReadSpreadsheetClick.bind(this);
    this.handleReadNewestSpreadsheetClick = this.handleReadNewestSpreadsheetClick.bind(this);
  }

  // private static void VisitWooordhunt(string en, out string spell, out string rus)
  // {
  //     spell = "";
  //     rus = "";
  //     try
  //     {
  //         var url = $"http://wooordhunt.ru/word/{en}";
  //         var web = new XmlDocument();
  //         web.Load(url);
  //         spell = web.DocumentElement.SelectSingleNode("//*[@id=\"uk_tr_sound\"]/span[1]")?.InnerText ?? "";
  //         rus = web.DocumentElement.SelectSingleNode("//*[@id=\"wd_content\"]/span/text()")?.InnerText ?? "";
  //     }
  //     catch (Exception)
  //     {
  //         // ignored
  //     }
  // }

  // visitWoordhunt(eng) {
  //   var url = `https://wooordhunt.ru/word/${eng}`;
  //   var xmlHttp = new XMLHttpRequest();
  //   xmlHttp.onreadystatechange = this.getInfo;
  //   xmlHttp.open( "GET", url, false );
  //   xmlHttp.send();
  //   var responseText = xmlHttp.responseText;
  //   return responseText;
  // }

  // getData() {
  //   // create a new XMLHttpRequest
  //   var xhr = new XMLHttpRequest()

  //   // get a callback when the server responds
  //   xhr.addEventListener('load', () => {
  //     // update the state of the component with the result here
  //     console.log(xhr.responseText)
  //   })
  //   // open the request with the verb and the url
  //   xhr.open('GET', 'https://wooordhunt.ru')
  //   // send the request
  //   xhr.send()
  // }

  // getInfo(resp) {
  // 	// if (request.readyState == 4) {
  // 	// 	var val = request.responseText;
  // 	// 	document.getElementById('chiru').innerHTML = val;
  // 	// }
  // }

  handleReadSpreadsheetClick() {
    this.updateLocalStorage();
    window.gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetIdref.current.value,
      range: RANGE,
    }).then(this.getSuccess, this.getFail);
  }

  handleReadNewestSpreadsheetClick() {
    listFiles(this.props.dispatch);
  }

  getSuccess(response) {
    var values = response.result.values;
    var words = [];
    if (values.length > 0) {
      for (var i = 0; i < values.length; i++) {
        var row = values[i];
        words.push(row);
      }
      this.props.dispatch(updateErrorActionCreator(""));
    } else {
      this.props.dispatch(updateErrorActionCreator('No data found.'));
    }

    var newStickers = [];
    var rowCounter = 0;
    var wordsCounter = 0;
    var rowModel = [];
    words.forEach(element => {
      rowCounter++;
      wordsCounter++;
      rowModel.push({
        English: element[0],
        Spelling: "---",
        Russian: element[1]
      })
      if (rowCounter == 4 || words.length - wordsCounter == 0) {
        var need = 4 - rowModel.length;
        if (need > 0) {
          for (var i = 0; i < need; i++) {
            rowModel.push({
              English: "---",
              Spelling: "---",
              Russian: "---"
            })
          }
        }
        newStickers.push(rowModel);
        rowModel = [];
        rowCounter = 0;

      }
    });
    this.props.dispatch(updateStickersActionCreator(newStickers));
  }

  getFail(response) {
    this.props.dispatch(updateErrorActionCreator('Error: ' + response.result.error.message));
  }


  updateLocalStorage() {
    localStorage.setItem('SPREADSHEET_ID', spreadsheetIdref.current.value);
  }

  getSnapshotBeforeUpdate() {
    if (this.props.spreadseetId) {
      spreadsheetIdref.current.value = this.props.spreadseetId;
    }
  }

  componentDidMount() {
    spreadsheetIdref.current.value = localStorage.getItem('SPREADSHEET_ID');
  }

  render() {
    return (
      <div>
        <table width="100%">
          <tr>
            <td width="58%">
              <label className="w3-text-blue"><b>Phrasebook ID:</b></label>
              <input className="w3-input w3-border" ref = {spreadsheetIdref} type="text" size="100" />
            </td>
            <td width="12%">
              <button id="read_spreadsheet" className={cs.button} onClick={this.handleReadSpreadsheetClick}>Read specified phrasebook</button>
            </td>
            <td width="12%">
              <button id="read_spreadsheet" className={cs.button} onClick={this.handleReadNewestSpreadsheetClick}>Get newest phrasebook ID</button>
            </td>
            <td width="12%">
              <Pdf id="id_pdf" targetRef={this.props.pdf} filename="stickers.pdf" options={options} x={2} y={2}>
                {({ toPdf }) => <button id="pdf" className={cs.button} onClick={toPdf}>Dowdload stickers in pdf</button>}
              </Pdf>
            </td>
          </tr>
        </table>
      </div>
    );
  }


}

export default ReadSpreadsheet;