import React, { Component } from 'react';
import Stickers from './Stickers'
import { updatePdf } from './../redux/stickers-reducer'
import { mouseOverSticker, mouseLeaveSticker, studiedSticker } from './../redux/stickers-reducer';
import { connect } from 'react-redux'
import { initialStickers } from './../redux/stickers-reducer';
import Preloader from './../Components/Preloader/Preloader.js'
import { getStickers } from './../redux/stickers-reducer';


class StickersContainer extends Component {

    render() {
        if (this.props.isSignedIn && this.props.stickers.length === initialStickers.length && this.props.isFetchingStickers === false) {
            this.props.getStickers();
        }

        return (
            <div>
                {this.props.isFetchingStickers ? <Preloader /> : <Stickers {...this.props} />}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        stickers: state.stickersPage.stickers,
        isSignedIn: state.signInPage.isSignedIn,
        isFetchingStickers: state.stickersPage.isFetchingStickers,
    }
}

export default connect(mapStateToProps, {
    updatePdf,
    mouseOverSticker,
    mouseLeaveSticker,
    studiedSticker,
    getStickers
})(StickersContainer);
