import React, { Component } from 'react';
import SigninWithGoogleContainer from '../SignInWithGoogle/SigninWitGoogleContainer';
import ErrorBarContainer from '../ErrorBar/ErrorBarContainer';
import s from './Navbar.module.css';


class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.navbar}>
                <p align="center">
                    <SigninWithGoogleContainer store ={this.props.store} />
                    <p>
                        <ErrorBarContainer store={this.props.store} />
                    </p>
                </p>
            </div>
        );
    }
}

export default Navbar;