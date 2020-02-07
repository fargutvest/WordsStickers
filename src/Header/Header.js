import React, { Component } from 'react';
import ReadSpreadsheetContainer from './../ReadSpreadsheet/ReadSpreadContainter'
import s from './Header.module.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.header}>
                <ReadSpreadsheetContainer store={this.props.store} />
            </div>
        );
    }
}

export default Header;