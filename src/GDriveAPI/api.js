import { updateSpreadsheetIdActionCreator } from './../redux/spreadsheet-reducer'
import { updateFilesListActionCreator } from './../redux/gdrive-reducer'


const rus = "Сохраненные переводы";
const eng = "Saved translations";
let _dispatch = '';

export let bubbleSort = (arr) => {
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

let listFilesSuccess = (response) => {
    var files = response.result.files;
    var sorted = bubbleSort(files);
    var maxSorted = sorted[sorted.length - 1];
    _dispatch(updateSpreadsheetIdActionCreator(maxSorted.id));
    _dispatch(updateFilesListActionCreator(files));
}


export let listFiles = (dispatch) => {
    _dispatch = dispatch;
    window.gapi.client.drive.files.list({
        'pageSize': 100,
        q: "mimeType='application/vnd.google-apps.spreadsheet'",
        q: `name='${eng}' or name='${rus}'`,
        'fields': "nextPageToken, files(id, name, createdTime, modifiedTime)"
    }).then(listFilesSuccess);
}


export let cleanFiles = (filesList) => {
    var sorted = bubbleSort(filesList);

    for (var i = 0; i < sorted.length - 1; i++) {
        var request = window.gapi.client.drive.files.delete({
            'fileId': sorted[i].id
        });
        request.execute(function (resp) {
            console.log(resp);
        });
    }
}





listFiles = listFiles.bind(this);
listFilesSuccess = listFilesSuccess.bind(this);
bubbleSort = bubbleSort.bind(this);