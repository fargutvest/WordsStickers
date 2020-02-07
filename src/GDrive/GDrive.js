import React, { Component } from 'react';
import s from './GDrive.module.css'
import cs from './../Common.module.css';
import { listFiles, getLastCreatedFile } from '../API/GDriveAPI'



class GDrive extends Component {
  constructor(props) {
    super(props);

    this.onClickGetPhrasebook = this.onClickGetPhrasebook.bind(this);
  }


  renderFiles() {
    if (this.props.filesList && this.props.filesList.length > 0) {
      var lastCreatedFile = getLastCreatedFile(this.props.filesList);

      var filesList = [];
      filesList.push('Last created phrasebook file:');
      filesList.push(lastCreatedFile.name + ' (' + lastCreatedFile.id + ')' + ' Created:' + lastCreatedFile.createdTime + ' Modified:' + lastCreatedFile.modifiedTime);
      filesList.push(".");
      filesList.push('Phrasebook files:');

      var files = this.props.filesList;
      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          filesList.push(file.name + ' (' + file.id + ')' + ' Created:' + file.createdTime + ' Modified:' + file.modifiedTime);
        }
      } else {
        filesList.push('No files found.');
      }

      return filesList.map((item, index) => <div key={index}> {item} </div>);
    }
  }

  onClickGetPhrasebook() {
    listFiles((files) => {
      this.props.onUpdatePhrasebook(files);
    });
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


export default GDrive;