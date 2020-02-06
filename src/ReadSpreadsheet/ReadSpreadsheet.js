import React, { Component } from 'react';
import Pdf from "react-to-pdf";
import s from './ReadSpreadsheet.module.css'
import cs from './../Common.module.css'
import { updateErrorActionCreator } from './../redux/error-reducer';
import { updateStickersActionCreator } from './../redux/stickers-reducer';
import { updateSpreadsheetIdActionCreator } from '../redux/spreadsheet-reducer'
import { listFiles, getLastCreatedFile } from '../API/GDriveAPI'
import { getValues } from '../API/GSheetsAPI'

const spreadsheetIdref = React.createRef();
const countStickersInRow = 4;


const options = {
  orientation: 'landscape'
};


class ReadSpreadsheet extends Component {
  constructor(props) {
    super(props);
    this.readSuccess = this.readSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.handleReadSpreadsheetClick = this.handleReadSpreadsheetClick.bind(this);
    this.handleGetNewestSpreadsheetIdClick = this.handleGetNewestSpreadsheetIdClick.bind(this);
  }

  handleGetNewestSpreadsheetIdClick() {
    listFiles((files) => {
      var lastCreatedFile = getLastCreatedFile(files);
      this.props.dispatch(updateSpreadsheetIdActionCreator(lastCreatedFile.id));
    });
  }

  handleReadSpreadsheetClick() {
    getValues(spreadsheetIdref.current.value, this.readSuccess, (message) => { this.showError("Error" + message) });
  }

  readSuccess(spreadsheetLines) {
    this.showError(spreadsheetLines.length > 0 ? "" : "No data found.");

    var stickersPage = [];
    var linesCounter = 0;
    var stickersRow = [];
    spreadsheetLines.forEach(lineCells => {

      linesCounter++;
      stickersRow.push({
        English: lineCells[0],
        Spelling: "---",
        Russian: lineCells[1]
      })
      if (stickersRow.length == countStickersInRow || spreadsheetLines.length - linesCounter == 0) {
        var need = countStickersInRow - stickersRow.length;
        if (need > 0) {
          for (var i = 0; i < need; i++) {
            stickersRow.push({
              English: "---",
              Spelling: "---",
              Russian: "---"
            })
          }
        }
        stickersPage.push(stickersRow);
        stickersRow = [];
      }
    });
    this.props.dispatch(updateStickersActionCreator(stickersPage));
  }


  getSnapshotBeforeUpdate() {
    if (this.props.spreadseetId) {
      spreadsheetIdref.current.value = this.props.spreadseetId;
    }
  }

  showError(message) {
    this.props.dispatch(updateErrorActionCreator(message));
  }

  render() {
    return (
      <div>
        <table width="100%">
          <tr>
            <td width="58%">
              <label className="w3-text-blue"><b>Phrasebook ID:</b></label>
              <input className="w3-input w3-border" ref={spreadsheetIdref} type="text" size="100" />
            </td>
            <td width="12%">
              <button id="read_spreadsheet" className={cs.button} onClick={this.handleGetNewestSpreadsheetIdClick}>Get newest phrasebook ID</button>
            </td>
            <td width="12%">
              <button id="read_spreadsheet" className={cs.button} onClick={this.handleReadSpreadsheetClick}>Read specified phrasebook</button>
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