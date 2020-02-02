import React, { Component } from 'react';
import Urls from '../Urls/Urls'
import s from './Footer.module.css'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.footer}>
                <Urls></Urls>
            </div>
        );
    }
}

export default Footer;