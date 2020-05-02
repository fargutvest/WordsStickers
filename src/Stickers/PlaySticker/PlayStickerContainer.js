import React, { Component } from 'react';
import PlaySticker from './PlaySticker'
import { updatePdf } from './../../redux/stickers-reducer'
import { mouseOverSticker, mouseLeaveSticker, studiedSticker, getStickers, initialStickers } from './../../redux/stickers-reducer';
import { connect } from 'react-redux'
import Preloader from './../../Components/Preloader/Preloader.js'
import { getStickersSelector, getIsFetchingStickers } from './../../redux/stickers-selectors'
import { getIsSignedIn } from './../../redux/signin-selectors'


class PlayStickerContainer extends Component {

    render() {
        if (this.props.isSignedIn && this.props.stickers.length === initialStickers.length && this.props.isFetchingStickers === false) {
            this.props.getStickers();
        }

        var sticker = this.props.stickers[Math.floor(Math.random() * this.props.stickers.length)];

        return <PlaySticker {...this.props} sticker={sticker} />
    }
}

let mapStateToProps = (state) => {
    return {
        stickers: getStickersSelector(state),
        isSignedIn: getIsSignedIn(state),
        isFetchingStickers: getIsFetchingStickers(state),
    }
}

export default connect(mapStateToProps, {
    updatePdf,
    mouseOverSticker,
    mouseLeaveSticker,
    studiedSticker,
    getStickers
})(PlayStickerContainer);
