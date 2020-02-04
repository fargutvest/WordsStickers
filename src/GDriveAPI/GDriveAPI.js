import React, { Component } from 'react';
import s from './GDriveAPI.module.css'
import cs from './../Common.module.css';
import {updateSpreadsheetIdActionCreator } from './../redux/spreadsheet-reducer'
import {updateFilesListActionCreator } from './../redux/gdrive-reducer'

const rus = "Сохраненные переводы";
const eng = "Saved translations";

class GDriveAPI extends Component {
  constructor(props) {
    super(props);
    this.listFiles = this.listFiles.bind(this);
    this.listFilesSuccess = this.listFilesSuccess.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.cleanFiles = this.cleanFiles.bind(this);
  }


  listFiles() {
    window.gapi.client.drive.files.list({
      'pageSize': 100,
      q: "mimeType='application/vnd.google-apps.spreadsheet'",
      q: `name='${eng}' or name='${rus}'`,
      'fields': "nextPageToken, files(id, name, createdTime, modifiedTime)"
    }).then(this.listFilesSuccess);
  }

  listFilesSuccess(response) {
    var files = response.result.files;
    var sorted = this.bubbleSort(files);
    var maxSorted = sorted[sorted.length - 1];
    this.props.dispatch(updateSpreadsheetIdActionCreator(maxSorted.id));
    this.props.dispatch(updateFilesListActionCreator(files));
  }

  bubbleSort(arr) {
    let n = arr.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if ((Date.parse(arr[j].createdTime) > Date.parse(arr[j + 1].createdTime))) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  cleanFiles() {
    var sorted = this.bubbleSort(this.props.filesList);

    for (var i = 0; i < sorted.length - 1; i++) {
      var request = window.gapi.client.drive.files.delete({
        'fileId': sorted[i].id
      });
      request.execute(function (resp) {
        console.log(resp);
      });
    }
  }

  renderFiles() {
    if (this.props.filesList && this.props.filesList.length > 0) {
      var sorted = this.bubbleSort(this.props.filesList);
      var maxSorted = sorted[sorted.length - 1];

      var filesList = [];
      filesList.push('File with max createdTime:');
      filesList.push(maxSorted.name + ' (' + maxSorted.id + ')' + ' Created:' + maxSorted.createdTime + ' Modified:' + maxSorted.modifiedTime);
      filesList.push(".");
      filesList.push('All gsheet files:');
      if (sorted && sorted.length > 0) {
        for (var i = 0; i < sorted.length - 1; i++) {
          var file = sorted[i];
          filesList.push(file.name + ' (' + file.id + ')' + ' Created:' + file.createdTime + ' Modified:' + file.modifiedTime);
        }
      } else {
        filesList.push('No files found.');
      }

      return filesList.map((item, index) => <div key={index}> {item} </div>);
    }
  }


  render() {
    return <div className={s.main}>
      <button className={cs.button} onClick={this.listFiles}>Get gsheet {rus}/{eng} </button>
      <button className={`${cs.button} ${cs.remove}`} onClick={this.cleanFiles}>Clean gsheets {rus}/{eng}</button>
      <p>
        <div>
          {this.renderFiles()}
        </div>
      </p>
    </div>;
  }
}


export default GDriveAPI;