import React, { Component } from 'react';
import Pdf from "react-to-pdf";
import s from './ReadSpreadsheet.module.css'
import cs from './../Common.module.css'
import { Field, reduxForm } from 'redux-form'
import { required, maxLenghtCreator } from './../utils/validators.js'
import { Input, inputRef } from './../Components/FormsControls/FormsControls.js'

const maxLenght45 = maxLenghtCreator(45);

let ReadPhrasebookByIdForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div className={s.form}>
      <Field name="spreadsheetId" label="Phrasebook ID: " validate={[required, maxLenght45]} component={Input} />
      <div className={s.floatRight}>
        <button className={cs.button} >Read specified phrasebook</button>
      </div>
    </div>
  </form>
}


let ReadPhrasebookByIdFormRedux = reduxForm({ form: "ReadPhrasebookById" })(ReadPhrasebookByIdForm);

const spreadsheetIdref = React.createRef();

const options = {
  orientation: 'landscape'
};


class ReadSpreadsheet extends Component {

  handleGetNewestSpreadsheetIdClick = () => {
    this.props.getLatestSpreadsheetId();
  }

  handleReadSpreadsheetClick = (values) => {
    this.props.getStickers(values.spreadsheetId);
  }

  getSnapshotBeforeUpdate() {
    if (this.props.spreadseetId) {
      inputRef.current.value = this.props.spreadseetId;
    }
  }

  onChangeSpreadsheetId = () => {
    this.props.updateSpreadsheetId(inputRef.current.value);
  }



  render() {
    return (
      <div className={s.bar}>
        <ReadPhrasebookByIdFormRedux onSubmit={this.handleReadSpreadsheetClick} />
        <button id="read_spreadsheet" className={cs.button} onClick={this.handleGetNewestSpreadsheetIdClick}>Get newest phrasebook ID</button>
        <Pdf id="id_pdf" targetRef={this.props.pdf} filename="stickers.pdf" options={options} x={2} y={2}>
          {({ toPdf }) => <button id="pdf" className={cs.button} onClick={toPdf}>Dowdload stickers in pdf</button>}
        </Pdf>
      </div>
    );
  }

}

export default ReadSpreadsheet;