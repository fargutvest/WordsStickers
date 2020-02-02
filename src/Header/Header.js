import React, { Component } from 'react';
import DataAccess from '../DataAccess/DataAccess';
import s from './Header.module.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.header}>
                <DataAccess spreedSheetId ={this.props.spreedSheetId} updateShared ={this.props.updateShared} da_ref = {this.props.da_ref}></DataAccess>
            </div>
        );
    }
}

export default Header;