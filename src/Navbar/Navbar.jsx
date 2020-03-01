import React, { Component } from 'react';
import SigninWithGoogleContainer from '../SignInWithGoogle/SigninWitGoogleContainer';
import ErrorBarContainer from '../ErrorBar/ErrorBarContainer';
import SocialUrl from './../Social/SocialUrl'
import github from './../Assets/github.svg'
import youtube from './../Assets/youtube.svg'
import s from './Navbar.module.css';


class Navbar extends Component {

    render() {
        return (
            <div className={s.navbar}>
                <p align="center">
                    <SigninWithGoogleContainer />
                    <p>
                        <ErrorBarContainer />
                    </p>
                    <p>
                        <SocialUrl url="https://www.youtube.com/watch?v=C-FKXagcLRQ&list=PLQPXxMwGR_nkJyvzRnj8NGgHwgvpdipy4" icon={youtube} />
                    </p>
                    <p>
                        <SocialUrl url="https://github.com/fargutvest/EnglishWordsStickers" icon={github} />
                    </p>
                </p>
            </div>
        );
    }
}

export default Navbar;