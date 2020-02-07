import React from 'react';
import SigninWithGoogle from './SignInWithGoogle'
import { updateIsSignedInActionCreator, updateProfileActionCreator } from './../redux/signin-reducer'
import { updateErrorActionCreator } from './../redux/error-reducer'

const SigninWithGoogleContainer = (props) => {

    let state = props.store.getState().signInPage;

    let updateProfile = (profile) => {
        props.store.dispatch(updateProfileActionCreator(profile));
    }

    let updateIsSignedIn = (isSignedIn) => {
        props.store.dispatch(updateIsSignedInActionCreator(isSignedIn));
    }

    let showError = (message) => {
        props.store.dispath(updateErrorActionCreator(message));
    }

    return (<SigninWithGoogle profile = {state.profile} isSignedIn = {state.isSignedIn} onShowError = {showError} onUpdateProfile={updateProfile} onUpdateIsSignedIn={updateIsSignedIn} />)
}


export default SigninWithGoogleContainer;

