import React, { Component } from 'react';
import ReadSpreadsheetContainter from './../ReadSpreadsheet/ReadSpreadsheetContainter'
import s from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div className={s.header}>
                <ReadSpreadsheetContainter/>
            </div>
        );
    }
}

export default Header;