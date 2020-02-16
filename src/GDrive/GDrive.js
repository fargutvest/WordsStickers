import React, { Component } from 'react';
import s from './GDrive.module.css'
import cs from './../Common.module.css';

class GDrive extends Component {

  renderFiles() {
    var allPhrasebookFiles = this.props.phrasebookFilesTree.allPhrasebookFiles;
    
    if (allPhrasebookFiles && allPhrasebookFiles.length > 0) {
      var filesList = [];
      var latestPhrasebookFile = this.props.phrasebookFilesTree.latestPhrasebookFile;
      filesList.push('Latest created phrasebook file:');
      filesList.push(latestPhrasebookFile.name + ' (' + latestPhrasebookFile.id + ')' + ' Created:' + latestPhrasebookFile.createdTime + ' Modified:' + latestPhrasebookFile.modifiedTime);
      filesList.push(".");
      filesList.push('Phrasebook files:');

      if (allPhrasebookFiles && allPhrasebookFiles.length > 0) {
        for (var i = 0; i < allPhrasebookFiles.length; i++) {
          var file = allPhrasebookFiles[i];
          filesList.push(file.name + ' (' + file.id + ')' + ' Created:' + file.createdTime + ' Modified:' + file.modifiedTime);
        }
      } else {
        filesList.push('No files found.');
      }

      return filesList.map((item, index) => <div key={index}> {item} </div>);
    }
  }

  onClickGetPhrasebookFiles = () => {
    this.props.getPhrasebookFiles();
  }

  onClikCleanPhrasebookFiles = () => {
    this.props.cleanPhrasebookFiles(this.props.phrasebookFilesTree.allPhrasebookFiles);
  }

  render() {
    return <div className={s.main}>
      <button className={cs.button} onClick={this.onClickGetPhrasebookFiles}>Get phrasebook files</button>
      <button className={`${cs.button} ${cs.remove}`} onClick={this.onClikCleanPhrasebookFiles}>Clean old phrasebook files</button>
      <p>
        <div>
          {this.renderFiles()}
        </div>
      </p>
    </div>;
  }
}


export default GDrive;