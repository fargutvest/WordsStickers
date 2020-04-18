import React, { Component } from 'react';
import Stickers from './Stickers'
import { updatePdf } from './../redux/stickers-reducer'
import { mouseOverSticker, mouseLeaveSticker, studiedSticker } from './../redux/stickers-reducer';
import { connect } from 'react-redux'
import { initialStickers } from './../redux/stickers-reducer';
import Preloader from './../Components/Preloader/Preloader.js'
import { getStickers } from './../redux/stickers-reducer';
import { getStickersSelector, getIsFetchingStickers } from './../redux/stickers-selectors'
import { getIsSignedIn } from './../redux/signin-selectors'


class StickersContainer extends Component {

    render() {
        if (this.props.isSignedIn && this.props.stickers.length === initialStickers.length && this.props.isFetchingStickers === false) {
            this.props.getStickers();
        }

        return <Stickers {...this.props} />
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
})(StickersContainer);
