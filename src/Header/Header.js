import React, { Component } from 'react';
import ReadSpreadsheet from '../ReadSpreadsheet/ReadSpreadsheet';
import s from './Header.module.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.header}>
                <ReadSpreadsheet spreadseetId={this.props.spreadseetId} pdf={this.props.pdf} dispatch={this.props.dispatch}></ReadSpreadsheet>
            </div>
        );
    }
}

export default Header;