import React from 'react';
import SigninWithGoogle from './SignInWithGoogle'
import { updateIsSignedIn, updateProfile } from './../redux/signin-reducer'
import { updateError } from './../redux/error-reducer'
import { connect } from 'react-redux'
import { getProfile, getIsSignedIn } from '../redux/signin-selectors';

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        isSignedIn: getIsSignedIn(state)
    }
}


const SigninWithGoogleContainer = connect(mapStateToProps, { updateError, updateProfile, updateIsSignedIn })(SigninWithGoogle);

export default SigninWithGoogleContainer;

