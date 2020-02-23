import React, { Component } from 'react';
import s from './ReadSpreadsheet.module.css'
import cs from './../Common.module.css'
import { Field, reduxForm } from 'redux-form'
import { required, maxLenghtCreator } from './../utils/validators.js'
import { Input, inputRef } from './../Components/FormsControls/FormsControls.js'
import { htmlToPdf } from './../utils/htmlToPdf'

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

  onClickPdf = () => {
    htmlToPdf(750, 'landscape', this.props.pdf, 'Stickers to print.pdf');
  }


  render() {
    return (
      <div className={s.bar}>
        <ReadPhrasebookByIdFormRedux onSubmit={this.handleReadSpreadsheetClick} />
        <button id="read_spreadsheet" className={cs.button} onClick={this.handleGetNewestSpreadsheetIdClick}>Get newest phrasebook ID</button>
        <button id="pdf" className={cs.button} onClick={this.onClickPdf}>Dowdload stickers in pdf</button>
      </div>
    );
  }

}

export default ReadSpreadsheet;