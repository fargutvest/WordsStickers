import React from 'react';
import SigninWithGoogle from './SignInWithGoogle'
import { updateIsSignedInActionCreator, updateProfileActionCreator } from './../redux/signin-reducer'
import { updateErrorActionCreator } from './../redux/error-reducer'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        profile: state.signInPage.profile,
        isSignedIn: state.signInPage.isSignedIn
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onShowError: (message) => dispath(updateErrorActionCreator(message)),
        onUpdateProfile: (profile) => dispatch(updateProfileActionCreator(profile)),
        onUpdateIsSignedIn: (isSignedIn) => dispatch(updateIsSignedInActionCreator(isSignedIn))
    }
}

const SigninWithGoogleContainer = connect(mapStateToProps, mapDispatchToProps)(SigninWithGoogle);
 
export default SigninWithGoogleContainer;

