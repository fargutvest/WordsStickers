import React, { Component } from 'react';
import ReadSpreadsheetContainer from './../ReadSpreadsheet/ReadSpreadContainter'
import s from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div className={s.header}>
                <ReadSpreadsheetContainer/>
            </div>
        );
    }
}

export default Header;