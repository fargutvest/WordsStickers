import React, { Component } from 'react';
import s from './ReadSpreadsheet.module.css'
import cs from './../Common.module.css'
import { htmlToPdf } from './../utils/htmlToPdf'
import ReadPhrasebookByIdFormRedux from './ReadPhrasebookByIdForm'

const pageHeightPixels = 750;
const pdfFileName = "Stickers to print.pdf";
const pageOrientation = "landscape";


const ReadSpreadsheet = ({ updateSpreadsheetId, getLatestSpreadsheetId, getStickers, spreadseetId, pdf }) => {

  let onChangeSpreadsheetId = (e) => {
    updateSpreadsheetId(e.target.value);
  }

  let handleGetNewestSpreadsheetIdClick = () => {
    getLatestSpreadsheetId();
  }

  let handleOnSubmit = (values) => {
    getStickers(values.spreadsheetId);
  }


  let onClickPdf = () => {
    htmlToPdf(pageHeightPixels, pageOrientation, pdf, pdfFileName);
  }

  return (
    <div className={s.bar}>
      <ReadPhrasebookByIdFormRedux onSubmit={handleOnSubmit} initialValue={spreadseetId} onChangeSpreadsheetId = {onChangeSpreadsheetId} />
      <button id="read_spreadsheet" className={cs.button} onClick={handleGetNewestSpreadsheetIdClick}>Get newest phrasebook ID</button>
      <button id="pdf" className={cs.button} onClick={onClickPdf}>Dowdload stickers in pdf</button>
    </div>
  );

}

export default ReadSpreadsheet;