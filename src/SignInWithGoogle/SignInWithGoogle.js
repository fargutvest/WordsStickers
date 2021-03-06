import React, { Component } from 'react';
import s from './SignInWithGoogle.module.css';
import cs from './../Common.module.css';
import { initGAPI, getProfile, signInAuth2, loadAuth2, listenAuth2, getIsSignedIn } from './../API/GAPI';
import google from './../Assets/google.svg'
import signOutImg from './../Assets/sign-out.svg'
import SocialUrl from './../Social/SocialUrl'
import googlePlus from './../Assets/google-plus.svg'


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
            <input type="image" className={s.avatar} onClick={signInAuth2} src={googlePlus} />
        );

        var signOutBtn = <button className={cs.button} onClick={this.props.signOut}>Sign Out</button>;

        return this.props.isSignedIn ? "" : signIn;
    }

    getUserInfo() {
        var spredsheetLink = "https://docs.google.com/spreadsheets/d/" + this.props.spreadsheetId;
        if (this.props.profile) {
            return (
                <div>
                    {/* <label className="w3-text-white">{this.props.profile.getName()}</label> */}
                    <p align="center">
                        <SocialUrl url={spredsheetLink} icon={this.props.profile.getImageUrl()} />
                    </p>
                    <p align="center">
                        <input type="image" className={s.avatar} onClick={this.props.signOut} src={signOutImg} />
                    </p>
                </div>
            );
        }
        return '';
    }

    render() {
        return (
            <div className={s.main} align="center">
                {this.getUserInfo()}
                <p>
                    {this.getButton()}
                </p>
            </div>
        );
    }
}


export default SignInWithGoogle;