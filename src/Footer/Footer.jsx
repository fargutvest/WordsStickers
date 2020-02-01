import React, { Component } from 'react';
import Urls from './../Urls'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <Urls></Urls>
            </div>
        );
    }
}

export default Footer;