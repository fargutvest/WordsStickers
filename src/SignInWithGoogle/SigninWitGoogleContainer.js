import React from 'react';
import SigninWithGoogle from './SignInWithGoogle'
import { updateIsSignedInActionCreator, updateProfileActionCreator } from './../redux/signin-reducer'
import { updateErrorActionCreator } from './../redux/error-reducer'
import StoreContext from '../StoreContext';

const SigninWithGoogleContainer = () => {
    return <StoreContext.Consumer>
            { store => {
                    let state = store.getState().signInPage;

                    let updateProfile = (profile) => {
                        store.dispatch(updateProfileActionCreator(profile));
                    }

                    let updateIsSignedIn = (isSignedIn) => {
                        store.dispatch(updateIsSignedInActionCreator(isSignedIn));
                    }

                    let showError = (message) => {
                        store.dispath(updateErrorActionCreator(message));
                    }
                    return <SigninWithGoogle profile={state.profile} isSignedIn={state.isSignedIn} onShowError={showError} onUpdateProfile={updateProfile} onUpdateIsSignedIn={updateIsSignedIn} />
                }
            }
        </StoreContext.Consumer>
}


export default SigninWithGoogleContainer;

