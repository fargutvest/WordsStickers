import React, { Component } from 'react';
import DataAccess from '../DataAccess/DataAccess';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <DataAccess params = {this.props.params} spreedSheetId ={this.props.spreedSheetId} updateShared ={this.props.updateShared} da_ref = {this.props.da_ref}></DataAccess>
            </div>
        );
    }
}

export default Header;