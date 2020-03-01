const CLIENT_ID = "722524747087-sgjsjequa1sv10c8m3g9fl6gtqoa39eg.apps.googleusercontent.com";
const API_KEY = "AIzaSyANRAmPJFTjvI2lxfJpq82rd4SHtpBdKY0";
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4", "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/drive.metadata";

let getInstance = () =>{
    return window.gapi.auth2.getAuthInstance();
} 

export let initGAPI = async (observer) => {
    await window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    });
}


export let getProfile = () => {
    const googleUser = getInstance().currentUser.get();
    const profile = googleUser.getBasicProfile();
    return profile;
}


export let listenAuth2 = (observer) => {
    getInstance().isSignedIn.listen(observer);
}

export let getIsSignedIn = () =>{
   return window.gapi.auth2.getAuthInstance().isSignedIn.get();
}


export let signInAuth2 = () => {
    getInstance().signIn();
}

export let signOutAuth2 = () => {
    getInstance().signOut();
}

export let loadAuth2 = (observer) => {
    window.gapi.load('client:auth2', observer);
}