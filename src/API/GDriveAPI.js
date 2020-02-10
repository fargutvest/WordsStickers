const rus = "Сохраненные переводы";
const eng = "Saved translations";

export let orderByCreatedTime = (arr) => {
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

export let getLastCreatedFile = (files) => {
    var sorted = orderByCreatedTime(files);
    return sorted[sorted.length - 1];
  }

export let listFiles = (success) => {
    window.gapi.client.drive.files.list({
        'pageSize': 100,
        q: "mimeType='application/vnd.google-apps.spreadsheet'",
        q: `name='${eng}' or name='${rus}'`,
        'fields': "nextPageToken, files(id, name, createdTime, modifiedTime)"
    }).then((response) => { success(response.result.files) });
}


export let cleanFiles = (filesList) => {
    var sorted = orderByCreatedTime(filesList);

    for (var i = 0; i < sorted.length - 1; i++) {
        var request = window.gapi.client.drive.files.delete({
            'fileId': sorted[i].id
        });
        request.execute(function (resp) {
            console.log(resp);
        });
    }
}
