import React, { Component } from 'react';
import Urls from '../Urls/Urls'
import s from './Footer.module.css'

class Footer extends Component {

    render() {
        return (
            <div className={s.footer}>
                <Urls />
            </div>
        );
    }
}

export default Footer;