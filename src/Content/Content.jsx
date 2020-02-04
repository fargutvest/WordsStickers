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
                <Tabs filesList={this.props.filesList} stickers={this.props.stickers} dispatch={this.props.dispatch} />
            </div>
        );
    }
}

export default Content;