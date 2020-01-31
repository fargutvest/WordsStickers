import React, { Component } from 'react';
import './GDriveAPI.css'

class GDriveAPI extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.listFiles = this.listFiles.bind(this);
        this.listFilesSuccess = this.listFilesSuccess.bind(this);
    }

    onClick(){
      this.listFiles();
    }
    
    listFiles() {
      window.gapi.client.drive.files.list({
          'pageSize': 100,
           q: "mimeType='application/vnd.google-apps.spreadsheet'",
           q: "name='Saved translations' or name='Сохраненные переводы'",
          'fields': "nextPageToken, files(id, name)"
        }).then(this.listFilesSuccess);
      }

      listFilesSuccess(response){
        this.appendPre('Files:');
        var files = response.result.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            this.appendPre(file.name + ' (' + file.id + ')');
          }
        } else {
          this.appendPre('No files found.');
        }
      }

    appendPre(message) {
        var pre = document.getElementById('listFiles');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

    render(){
        return <div className="main">
             <button className= "button" onClick={this.onClick}>List Files</button>
             <pre id = "listFiles"/>
            </div>;
    }
}


export default GDriveAPI;