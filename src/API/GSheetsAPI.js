const RANGE = "C:D";

export let getValues = async (spreadsheetId, success, fail) => {
    const response = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: RANGE,
    });

    if (response.result.error) {
        fail(response.result.error.message);
    }
    else {
        success(response.result.values);
    }
}