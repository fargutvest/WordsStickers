import React from 'react';
import SigninWithGoogle from './SignInWithGoogle'
import { updateIsSignedIn, updateProfile } from './../redux/signin-reducer'
import { updateError } from './../redux/error-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        profile: state.signInPage.profile,
        isSignedIn: state.signInPage.isSignedIn
    }
}


const SigninWithGoogleContainer = connect(mapStateToProps, { updateError, updateProfile, updateIsSignedIn })(SigninWithGoogle);

export default SigninWithGoogleContainer;

