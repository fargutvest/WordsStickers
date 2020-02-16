import React, { Component } from 'react';
import SigninWithGoogleContainer from '../SignInWithGoogle/SigninWitGoogleContainer';
import ErrorBarContainer from '../ErrorBar/ErrorBarContainer';
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
                        <div>
                            <a class={"fa fa-youtube " + s.youtubelink} href="https://www.youtube.com/watch?v=C-FKXagcLRQ&list=PLQPXxMwGR_nkJyvzRnj8NGgHwgvpdipy4"></a>
                        </div>
                    </p>
                </p>
            </div>
        );
    }
}

export default Navbar;