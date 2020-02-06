const RANGE = "C:D";

export let getValues = (spreadsheetId, success, fail) => {
    window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: RANGE,
    }).then((response) => { success(response.result.values) }, (response) => { fail(response.result.error.message) });
}