import React, { Component } from 'react';
import s from './GDriveAPI.module.css'
import cs from './../../Common.module.css';

const rus = "Сохраненные переводы";
const eng = "Saved translations";

class GDriveAPI extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.listFiles = this.listFiles.bind(this);
        this.listFilesSuccess = this.listFilesSuccess.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
    }

    onClick(){
      this.listFiles();
    }
    
    listFiles() {
      window.gapi.client.drive.files.list({
          'pageSize': 100,
           q: "mimeType='application/vnd.google-apps.spreadsheet'",
           q: `name='${eng}' or name='${rus}'`,
          'fields': "nextPageToken, files(id, name, createdTime, modifiedTime)"
        }).then(this.listFilesSuccess);
      }

      listFilesSuccess(response){
        
        var files = response.result.files;
        var maxSorted = this.bubbleSort(files);
        this.props.ShareSpreedSheetId(maxSorted.id);
        this.cleanPre();
        this.appendPre('File with max createdTime:');
        this.appendPre(maxSorted.name + ' (' + maxSorted.id + ')' + ' Created:' + maxSorted.createdTime + ' Modified:' + maxSorted.modifiedTime);
        this.appendPre('');
        this.appendPre('All gsheet files:');
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            this.appendPre(file.name + ' (' + file.id + ')' + ' Created:' + file.createdTime + ' Modified:' + file.modifiedTime);
          }
        } else {
          this.appendPre('No files found.');
        }
        
      }

      bubbleSort(toSort){ 
        var max;
        max = toSort[0];
        toSort.forEach(item => {
          if(Date.parse(item.createdTime) > Date.parse(max.createdTime)){
            max = item;
          }
        });
        return max;
      }

      cleanPre(){
        var pre = document.getElementById('listFiles');
        pre.innerHTML = '';
      }

    appendPre(message) {
        var pre = document.getElementById('listFiles');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

    render(){
        return <div className={s.main}>
             <button className= {cs.button} onClick={this.onClick}>List Files</button>
             <pre id = "listFiles"/>
            </div>;
    }
}


export default GDriveAPI;