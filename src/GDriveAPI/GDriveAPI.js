import React, { Component } from 'react';
import s from './GDriveAPI.module.css'
import cs from './../Common.module.css';
import { listFiles, bubbleSort } from './api'


class GDriveAPI extends Component {
  constructor(props) {
    super(props);
    
    this.onClickGetPhrasebook = this.onClickGetPhrasebook.bind(this);
  }


  renderFiles() {
    if (this.props.filesList && this.props.filesList.length > 0) {
      var sorted = bubbleSort(this.props.filesList);
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

  onClickGetPhrasebook() {
    listFiles(this.props.dispatch);
  }

  render() {
    return <div className={s.main}>
      <button className={cs.button} onClick={this.onClickGetPhrasebook}>Get phrasebook files</button>
      <button className={`${cs.button} ${cs.remove}`} onClick={this.cleanFiles}>Clean old phrasebook files</button>
      <p>
        <div>
          {this.renderFiles()}
        </div>
      </p>
    </div>;
  }
}


export default GDriveAPI;