import React from 'react';
import SigninWithGoogle from './SignInWithGoogle'
import { updateIsSignedInAC, updateProfileAC } from './../redux/signin-reducer'
import { updateErrorAC } from './../redux/error-reducer'
import { updateStickersAC } from './../redux/stickers-reducer';
import { updateSpreadsheetIdAC } from '../redux/spreadsheet-reducer'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        profile: state.signInPage.profile,
        isSignedIn: state.signInPage.isSignedIn
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onShowError: (message) => dispatch(updateErrorAC(message)),
        onUpdateProfile: (profile) => dispatch(updateProfileAC(profile)),
        onUpdateIsSignedIn: (isSignedIn) => dispatch(updateIsSignedInAC(isSignedIn)),
        onUpdateStickers: (stickers) => { dispatch(updateStickersAC(stickers)) },
        onUpdateSpreadsheetId: (spreadsheetId) => {dispatch(updateSpreadsheetIdAC(spreadsheetId))},
    }
}

const SigninWithGoogleContainer = connect(mapStateToProps, mapDispatchToProps)(SigninWithGoogle);
 
export default SigninWithGoogleContainer;

