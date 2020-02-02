import React, { Component } from 'react';
import SignInWithGoogle from '../SignInWithGoogle/SignInWithGoogle';
import s from './Navbar.module.css';


class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.navbar}>
                <p align="center">
                    <label className="w3-text-white" id="title"></label>
                    <p align="center">
                        <img id="avatar" width="50px" height="50px" alt="Avatar" />
                    </p>
                    <SignInWithGoogle shared_var={this.props.shared_var} callback={this.props.callback} />
                </p>
            </div>
        );
    }
}

export default Navbar;