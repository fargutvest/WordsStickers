import React, { Component } from 'react';
import StickersContainer from '../Stickers/StickersContainer';
import s from './Content.module.css'


class Content extends Component {

    render() {
        return (
            <div className={s.content}>
                <StickersContainer/>
            </div>
        );
    }
}

export default Content;