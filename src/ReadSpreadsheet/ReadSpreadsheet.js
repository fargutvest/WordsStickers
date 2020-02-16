import React, { Component } from 'react';
import Pdf from "react-to-pdf";
import s from './ReadSpreadsheet.module.css'
import cs from './../Common.module.css'


const spreadsheetIdref = React.createRef();

const options = {
  orientation: 'landscape'
};


class ReadSpreadsheet extends Component {

  handleGetNewestSpreadsheetIdClick = () => {
    this.props.getLatestSpreadsheetId();
  }

  handleReadSpreadsheetClick = () => {
    this.props.getStickers(spreadsheetIdref.current.value);
  }

  getSnapshotBeforeUpdate() {
    if (this.props.spreadseetId) {
      spreadsheetIdref.current.value = this.props.spreadseetId;
    }
  }

  onChangeSpreadsheetId = () => {
    this.props.updateSpreadsheetId(spreadsheetIdref.current.value);
  }

  render() {
    return (
      <div className={s.bar}>

        <div>
          <label className="w3-text-white"><b>Phrasebook ID:</b></label>
          <input id="spreadsheetId" className="w3-input w3-border" ref={spreadsheetIdref} onChange={this.onChangeSpreadsheetId} type="text" />
        </div>

        <button id="read_spreadsheet" className={cs.button} onClick={this.handleGetNewestSpreadsheetIdClick}>Get newest phrasebook ID</button>

        <button id="read_spreadsheet" className={cs.button} onClick={this.handleReadSpreadsheetClick}>Read specified phrasebook</button>

        <Pdf id="id_pdf" targetRef={this.props.pdf} filename="stickers.pdf" options={options} x={2} y={2}>
          {({ toPdf }) => <button id="pdf" className={cs.button} onClick={toPdf}>Dowdload stickers in pdf</button>}
        </Pdf>

      </div>
    );
  }

}

export default ReadSpreadsheet;