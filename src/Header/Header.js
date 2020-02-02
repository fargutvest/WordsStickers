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
                <ReadSpreadsheet spreedSheetId ={this.props.spreedSheetId} updateShared ={this.props.updateShared} da_ref = {this.props.da_ref}></ReadSpreadsheet>
            </div>
        );
    }
}

export default Header;