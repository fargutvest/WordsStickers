import React, { Component } from 'react';
import SignInWithGoogle from '../SignInWithGoogle/SignInWithGoogle';
import ErrorBar from '../ErrorBar/ErrorBar';
import s from './Navbar.module.css';


class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.navbar}>
                <p align="center">
                    <SignInWithGoogle isSignedIn ={this.props.isSignedIn} profile = {this.props.profile} dispath={this.props.dispath} />
                    <p>
                        <ErrorBar error={this.props.error} />
                    </p>
                </p>
            </div>
        );
    }
}

export default Navbar;