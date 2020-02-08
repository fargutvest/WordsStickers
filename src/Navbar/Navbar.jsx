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
                </p>
            </div>
        );
    }
}

export default Navbar;