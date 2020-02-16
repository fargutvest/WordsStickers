import React, { Component } from 'react';
import s from './Phrasebooks.module.css'
import cs from './../Common.module.css';

class Phrasebooks extends Component {

  renderFiles() {
    var allPhrasebookFiles = this.props.phrasebookFilesTree.allPhrasebookFiles;
    
    if (allPhrasebookFiles && allPhrasebookFiles.length > 0) {
      var filesList = [];
      var latestPhrasebookFile = this.props.phrasebookFilesTree.latestPhrasebookFile;
      filesList.push(<b>Latest created phrasebook file:</b>);
      filesList.push(latestPhrasebookFile.name + ' (' + latestPhrasebookFile.id + ')' + ' Created:' + latestPhrasebookFile.createdTime + ' Modified:' + latestPhrasebookFile.modifiedTime);
      filesList.push(<br/>);
      filesList.push(<b>Phrasebook files:</b>);

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

  onClikCleanPhrasebookFiles = () => {
    this.props.cleanPhrasebookFiles(this.props.phrasebookFilesTree.allPhrasebookFiles);
  }

  render() {
    return <div className={s.main}>
      <p>
        <div>
          {this.renderFiles()}
        </div>
      </p>
      <button className={`${cs.button} ${cs.remove}`} onClick={this.onClikCleanPhrasebookFiles}>Clean old phrasebook files</button>
    </div>;
  }
}


export default Phrasebooks;