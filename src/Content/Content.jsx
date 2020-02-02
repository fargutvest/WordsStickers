import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
import s from './Content.module.css'


class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.content}>
                <Tabs updatePdf={this.props.updatePdf}
                    filesList={this.props.filesList}
                    updateFilesList={this.props.updateFilesList}
                    stickers={this.props.stickers}
                    updateSpreadsheetId={this.props.updateSpreadsheetId} />
            </div>
        );
    }
}

export default Content;