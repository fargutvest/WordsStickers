import React, { Component } from 'react';
import s from './SignInWithGoogle.module.css';
import cs from './../Common.module.css';
import { initGAPI, getProfile, signInAuth2, signOutAuth2, loadAuth2, listenAuth2, getIsSignedIn } from './../API/GAPI';
import google from './../Assets/google.svg'

//todo: need to remove token.pickle

class SignInWithGoogle extends Component {

  initClient = async () => {
    try {
      await initGAPI();
      listenAuth2(this.updateSigninStatus);
      this.updateSigninStatus(getIsSignedIn());
      this.showError("");

    }
    catch (error) {
      this.showError(JSON.stringify(error, null, 2));
    }
  }


  updateSigninStatus = (isSignedIn) => {
    var profile;
    if (isSignedIn) {
      profile = getProfile();
    }

    this.props.updateProfile(profile);

    this.props.updateIsSignedIn(isSignedIn);
  }



  async componentDidMount() {
    loadAuth2(await this.initClient)
  }

  showError = (message) => {
    this.props.updateError(message);
  }

  getButton() {
    var signIn = (
      <button type="button" className={s.google_button} onClick={signInAuth2}>
        <span class={s.google_button_icon}>
          <img src={google} alt="google" />
        </span>
        <span class={s.google_button_text}>Sign in with Google</span>
      </button>
    );

    var signOut = <button className={cs.button} onClick={signOutAuth2}>Sign Out</button>;

    return this.props.isSignedIn ? signOut : signIn;
  }

  getUserInfo() {
    if (this.props.profile) {
      return (
        <div>
          <label className="w3-text-white">{this.props.profile.getName()}</label>
          <p align="center">
            <img width="50px" height="50px" alt="Avatar" src={this.props.profile.getImageUrl()} />
          </p>
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <div align="center">
        {this.getUserInfo()}
        <p>
          {this.getButton()}
        </p>
      </div>
    );
  }
}


export default SignInWithGoogle;