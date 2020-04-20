import React, { Component } from 'react';
import s from './IFrame.module.css'
import exit from '../../Assets/exit.svg'

const IFrame = ({ content, updateIsShowIframe }) => {

    let onClick = () => {
        updateIsShowIframe(false);
    }

    return (
        <div className={s.iframe}>
            <input className={s.exitButton} type="image" src={exit} onClick={onClick} />
            <iframe src={content} />
        </div>
    );
}

export default IFrame;