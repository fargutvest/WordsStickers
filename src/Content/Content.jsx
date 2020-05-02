import React, { Component } from 'react';
import StickersContainer from '../Stickers/StickersContainer';
import PlayStickerContainer from '../Stickers/PlaySticker/PlayStickerContainer';
import s from './Content.module.css'


class Content extends Component {

    render() {
        return (
            <div className={s.content}>
                {window.innerWidth > 980 ? <StickersContainer /> : <PlayStickerContainer />}
            </div>
        );
    }
}

export default Content;