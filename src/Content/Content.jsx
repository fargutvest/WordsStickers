import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
import s from './Content.module.css'


class Content extends Component {

    render() {
        return (
            <div className={s.content}>
                <Tabs/>
            </div>
        );
    }
}

export default Content;